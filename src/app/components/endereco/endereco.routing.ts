import { Routes, RouterModule } from '@angular/router';

import { EnderecoComponent } from './endereco.component';

const route: Routes = [
  {
    path: 'endereco',
    component: EnderecoComponent
  }
];

export const routingEndereco = RouterModule.forChild(route);