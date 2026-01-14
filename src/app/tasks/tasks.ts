import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card';
import { Task } from '../../models/taskmaster.model';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskCardComponent
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasks: Task[] = [
    {
      id: 'photoHuntTask',              // stable id used for Firestore path
      title: 'The Definitive Couple Photo Hunt',
      description: 'Submit the best photo you can find of either member of the couple. Bonus points if both are in the photo, or if the photo captures their “true essence” (interpret that however you wish). Artistic edits, memes, and historic archives are all acceptable.',
      type: 'photo'          // controls photo upload
    },
    // {
    //   id: 'testTask',              // stable id used for Firestore path
    //   title: 'this is the test task',
    //   description: 'can you do it?',
    //   type: 'either'          // controls photo upload
    // },
    {
      id: 'toastOff',              // stable id used for Firestore path
      title: 'The Great Toast-Off',
      description: 'Create and deliver a toast to the couple, but not with a drink — use literal toast. You may butter it, decorate it, or monogram it. The goal: the most emotional and over-the-top toast possible. Your time begins when the bread pops up.',
      type: 'photo'          // controls photo upload
    },
    {
      id: 'logoTask',              // stable id used for Firestore path
      title: 'The Wedding Logo',
      description: 'Design a new wedding logo for the couple using only items found in your kitchen. It must somehow represent love, unity, or citrus energy (however you interpret that). Bonus points for slogans, chaos, or elegance against all odds.',
      type: 'photo'          // controls photo upload
    },
    {
      id: 'futureMessageTask',              // stable id used for Firestore path
      title: 'The Future Message',
      description: 'Write a short message to the couple’s future selves on their 10th anniversary. Predict their future, offer sage advice, or read them their marriage horoscope. You are encouraged to take yourself far too seriously.',
      type: 'text'          // controls photo upload
    },


  ]
}
