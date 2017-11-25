import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routesTags: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

export const routingHome = RouterModule.forChild(routesTags);