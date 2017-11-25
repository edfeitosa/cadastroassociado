import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [
    ModalComponent
  ],
  declarations: [
    ModalComponent
  ],
  providers: [
    ModalComponent,
    NgbModal
  ]
})
export class ModalModule { }
