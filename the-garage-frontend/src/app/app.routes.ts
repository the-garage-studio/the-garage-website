import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'The Garage — Build your ultimate automotive collection',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
