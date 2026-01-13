import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './auth/auth.service';

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
  authService = inject(AuthService);

  names = 'Kristin & Travis';
  dateLine = 'Saturday, July 25, 2026 · Elk Ridge, SK';

  // Use local time zone by default; adjust if you want explicit SK time
  weddingDate = new Date('2026-07-25T00:00:00');

  // Replace with your asset paths (or bind from CMS/config)
  monogramText = 'TK';
  heroWatermarkText = 'TK';


  // ====== Countdown (simple) ======
  today = signal(new Date());

  daysToGo = computed(() => {
    const start = new Date(this.today());
    const end = new Date(this.weddingDate);
    // Normalize to midnight to avoid partial-day weirdness
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    const ms = end.getTime() - start.getTime();
    return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
  });

  // Optional: call this daily if you want it to update without refresh
  // ngOnInit() { setInterval(() => this.today.set(new Date()), 60_000); }

  navItems = [
    { label: 'Home', href: '/home' },
    { label: 'Accommodations', href: '/accommodations' },
    { label: 'Q + A', href: '/questions' },
    { label: 'Tasks', href: '/tasks' },
  ];



  mobileOpen = signal(false);
  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }
  closeMobile() {
    this.mobileOpen.set(false);
  }
}
