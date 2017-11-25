import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

import { CadastroComponent } from './cadastro.component';
import { routingCadastro } from './cadastro.routing';

import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routingCadastro,
    NgbModule.forRoot(),
    TextMaskModule,
    NavigationModule
  ],
  exports: [
    CadastroComponent
  ],
  declarations: [
    CadastroComponent
  ]
})
export class CadastroModule { }
