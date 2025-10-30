import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Accommodations } from './accommodations/accommodations';
import { Tasks } from './tasks/tasks';
import { Questions } from './questions/questions';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'accommodations', component: Accommodations },
  { path: 'tasks', component: Tasks },
  { path: 'questions', component: Questions },
];
