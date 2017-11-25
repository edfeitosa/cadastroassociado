import { Routes, RouterModule } from '@angular/router';

import { TelefoneComponent } from './telefone.component';

const route: Routes = [
  {
    path: 'telefone',
    component: TelefoneComponent
  }
];

export const routingTelefone = RouterModule.forChild(route);