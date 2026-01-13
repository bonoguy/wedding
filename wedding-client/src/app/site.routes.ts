import { Routes } from '@angular/router';

export const siteRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home').then(m => m.HomeComponent) },
    { path: 'accommodations', loadComponent: () => import('./accommodations/accommodations').then(m => m.Accommodations) },
    { path: 'tasks', loadComponent: () => import('./tasks/tasks').then(m => m.Tasks) },
    { path: 'questions', loadComponent: () => import('./questions/questions').then(m => m.Questions) },
];