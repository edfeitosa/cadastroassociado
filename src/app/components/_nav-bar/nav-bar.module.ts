import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [
    NavBarComponent
  ]
})
export class NavBarModule { }
