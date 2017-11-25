import { Routes, RouterModule } from '@angular/router';

import { SociosComponent } from './socios.component';

const route: Routes = [
  {
    path: 'socios',
    component: SociosComponent
  }
];

export const routingSocios = RouterModule.forChild(route);