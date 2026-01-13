import { Component, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unlock',
  imports: [],
  templateUrl: './unlock.html',
  styleUrl: './unlock.scss',
})
export class Unlock {
  password = signal('');
  error = signal<string | null>(null);
  show = signal(false);

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit(e: Event) {
    e.preventDefault();
    this.error.set(null);

    const ok = this.auth.unlock(this.password());
    if (ok) {
      // Send them to the real site root (which now lazy-loads)
      this.router.navigateByUrl('/');
    } else {
      this.error.set('That password doesn’t look right — try again.');
    }
  }
}
