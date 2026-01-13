import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
})
export class Upload {
  file: File | null = null;
  photoName = '';
  photos: any[] = [];

  // storage = getStorage();
  // db = getFirestore();

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  async upload() {
    if (!this.file) return;

    // const date = new Date().toISOString().split('T')[0];
    // const filePath = `photos/${Date.now()}_${this.file.name}`;
    // const storageRef = ref(this.storage, filePath);

    // // Upload with metadata
    // await uploadBytes(storageRef, this.file, {
    //   customMetadata: { name: this.photoName, date }
    // });

    // const url = await getDownloadURL(storageRef);

    // // Store metadata + URL in Firestore
    // await addDoc(collection(this.db, 'photos'), {
    //   name: this.photoName,
    //   date,
    //   url
    // });

    //this.photos.push({ name: this.photoName, date, url });
    this.photoName = '';
    this.file = null;
  }
}
