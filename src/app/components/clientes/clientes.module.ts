import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

import { ClientesComponent } from './clientes.component';
import { routingClientes } from './clientes.routing';

import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routingClientes,
    NgbModule.forRoot(),
    TextMaskModule,
    NavigationModule
  ],
  exports: [
    ClientesComponent
  ],
  declarations: [
    ClientesComponent
  ]
})
export class ClientesModule { }
