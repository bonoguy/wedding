import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wedding-client');

  daysToWedding: number = Math.ceil((new Date('2026-07-25').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}
