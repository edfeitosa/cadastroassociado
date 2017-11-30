import { Routes, RouterModule } from '@angular/router';

import { BancariosComponent } from './bancarios.component';

const route: Routes = [
  {
    path: 'bancarios',
    component: BancariosComponent
  }
];

export const routingBancarios = RouterModule.forChild(route);