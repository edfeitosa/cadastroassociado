import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { routingHome } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    routingHome
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
