import { Component, Input, ViewChild, ElementRef, inject } from '@angular/core';
import { signal } from '@angular/core';
import { Submission, Task } from '../../models/taskmaster.model';
import { TaskmasterService } from '../taskmaster';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.html',
})
export class TaskCardComponent {
  @Input({ required: true }) task!: Task;

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  submissions = signal<Submission[]>([]);
  name = signal('');
  description = signal('');
  file = signal<File | null>(null);
  submitting = signal<boolean>(false);

  progress = signal<number | null>(null);
  error = signal<string | null>(null);

  private svc: TaskmasterService = inject(TaskmasterService);

  ngOnInit() {
    this.svc.listenSubmissions(this.task.id, s => this.submissions.set(s));
  }

  openDialog() {
    this.error.set(null);
    this.submitting.set(false);
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  onFile(e: Event) {
    const input = e.target as HTMLInputElement;
    this.file.set(input.files?.[0] ?? null);
  }

  async submit() {
    if (!this.name().trim()) {
      this.error.set('Please add your name.');
      return;
    }
    if(this.submitting()) {
      return;
    }

    this.submitting.set(true);

    try {
      this.progress.set(this.file() ? 0 : null);

      await this.svc.createSubmission(
        {
          taskId: this.task.id,
          name: this.name(),
          description: this.description(),
          photoFile: this.task.type !== 'text' ? this.file() : null,
        },
        pct => this.progress.set(pct)
      );

      this.closeDialog();
      this.name.set('');
      this.description.set('');
      this.file.set(null);
      this.progress.set(null);
    } catch (e) {
      this.error.set('Something went wrong — please try again.');
      this.progress.set(null);
      this.submitting.set(false);
    }
  }
}
