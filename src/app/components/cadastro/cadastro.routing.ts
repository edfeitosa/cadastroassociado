import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro.component';

const route: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

export const routingCadastro = RouterModule.forChild(route);