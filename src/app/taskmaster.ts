import { inject, Injectable } from '@angular/core';
import { signInAnonymously } from 'firebase/auth';
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
  where,
  onSnapshot,
  limit,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { analytics, auth, db, logEvent, storage } from './firebase';
import { Submission } from '../models/taskmaster.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskmasterService {
  private submissionsCol = collection(db, 'task_submissions');
  private rsvpCol = collection(db, 'rsvp');
  private router = inject(Router);

  private isSiteUnlocked(): boolean {
    return sessionStorage.getItem('wedding_unlocked_v1') === 'true';
  }

  async ensureSignedIn() {
    if (!this.isSiteUnlocked()) throw new Error('Site is locked.');
    if (auth.currentUser) return;
    await signInAnonymously(auth);
  }

  listenSubmissions(taskId: string, cb: (items: Submission[]) => void, onErr?: (e: unknown) => void) {
    const q = query(
      this.submissionsCol,
      where('taskId', '==', taskId),
      orderBy('createdAt', 'desc'),
      limit(200)
    );

    return onSnapshot(
      q,
      snap => cb(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }))),
      err => onErr?.(err)
    );
  }

  async createSubmission(input: {
    taskId: string;
    name: string;
    description?: string;
    photoFile?: File | null;
  }, onProgress?: (pct: number) => void) {
    await this.ensureSignedIn();

    let photoUrl: string | undefined;
    let photoPath: string | undefined;

    if (input.photoFile) {
      const file = input.photoFile;
      const safeName = file.name.replace(/[^\w.\-() ]+/g, '_');
      const key = crypto.randomUUID();
      photoPath = `task_submissions/${input.taskId}/${key}-${safeName}`;

      const storageRef = ref(storage, photoPath);
      const task = uploadBytesResumable(storageRef, file, { contentType: file.type });

      await new Promise<void>((resolve, reject) => {
        task.on(
          'state_changed',
          snap => {
            if (!onProgress) return;
            const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            onProgress(pct);
          },
          err => reject(err),
          () => resolve()
        );
      });

      photoUrl = await getDownloadURL(task.snapshot.ref);
    }

    await addDoc(this.submissionsCol, {
      taskId: input.taskId,
      name: input.name.trim(),
      description: input.description?.trim() || null,
      photoUrl: photoUrl || null,
      photoPath: photoPath || null,
      createdAt: serverTimestamp(),
    });
  }

  initPageViewTracking() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        // Use urlAfterRedirects so it matches the final routed URL
        logEvent(analytics, 'page_view', {
          page_path: e.urlAfterRedirects,
        });
      });
  }

  async submitRsvp(rsvp: {
    names: string,
    attending: boolean,
    dietaryRestrictions: string,
    comments: string
  }) {
    await this.ensureSignedIn();
    await addDoc(this.rsvpCol, {
      names: rsvp.names,
      attending: rsvp.attending,
      dietaryRestrictions: rsvp.dietaryRestrictions,
      comments: rsvp.comments,
      createdAt: serverTimestamp(),
    });
  }
}
