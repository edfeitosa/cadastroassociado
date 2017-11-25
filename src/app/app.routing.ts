import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesTags: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routesTags);