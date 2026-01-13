import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'wedding_unlocked_v1';

  // Hardcoded password (simple). You can rotate later.
  // NOTE: anyone can still find this by inspecting bundles.
  private expected = 'CITRUS2026';

  isUnlocked(): boolean {
    return sessionStorage.getItem(this.storageKey) === 'true';
  }

  unlock(password: string): boolean {
    if (password.trim() === this.expected) {
      sessionStorage.setItem(this.storageKey, 'true');
      return true;
    }
    return false;
  }

  lock() {
    sessionStorage.removeItem(this.storageKey);
  }
}