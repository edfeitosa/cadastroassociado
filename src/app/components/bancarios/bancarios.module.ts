import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';

import { BancariosComponent } from './bancarios.component';
import { routingBancarios } from './bancarios.routing';

import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routingBancarios,
    NgbModule.forRoot(),
    TextMaskModule,
    NavigationModule
  ],
  exports: [
    BancariosComponent
  ],
  declarations: [
    BancariosComponent
  ]
})
export class BancariosModule { }
