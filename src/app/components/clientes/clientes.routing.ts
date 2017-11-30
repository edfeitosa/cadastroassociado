import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';

const route: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  }
];

export const routingClientes = RouterModule.forChild(route);