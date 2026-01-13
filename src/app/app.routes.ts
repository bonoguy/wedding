import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'unlock',
    loadComponent: () =>
      import('./unlock/unlock').then(m => m.Unlock),
  },
  {
    path: '',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./site.routes').then(m => m.siteRoutes),
  },
  { path: '**', redirectTo: '' },

  
];
