export type TaskType = 'text' | 'photo' | 'either';

export interface Task {
  id: string;              // stable id used for Firestore path
  title: string;
  description: string;
  type: TaskType;          // controls photo upload
}

export interface Submission {
  id?: string;
  taskId: string;

  name: string;
  description?: string;

  photoUrl?: string;       // download URL from Storage
  photoPath?: string;

  createdAt?: any;         // serverTimestamp()
}
