import { Routes } from '@angular/router';
import { AuthorizationComponent } from './components/layout/public/authorization/authorization.component';
import { TasksComponent } from './components/layout/main/tasks/tasks.component';
import { MainComponent } from './components/layout/main/main.component';

export const routes: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'signup', component: AuthorizationComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: TasksComponent },
      { path: 'active', component: TasksComponent },
      { path: 'completed', component: TasksComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];