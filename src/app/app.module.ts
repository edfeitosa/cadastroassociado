import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/_modal/modal.component';
import { HomeModule } from './components/_home/home.module';
import { NavBarModule } from './components/_nav-bar/nav-bar.module';
import { CadastroModule } from './components/cadastro/cadastro.module';
import { TelefoneModule } from './components/telefone/telefone.module';
import { SociosModule } from './components/socios/socios.module';
import { EnderecoModule } from './components/endereco/endereco.module';
import { BancariosModule } from './components/bancarios/bancarios.module';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    HomeModule,
    CadastroModule,
    TelefoneModule,
    SociosModule,
    EnderecoModule,
    BancariosModule,
    NavBarModule,
    routing
  ],
  providers: [
    CookieService,
    ModalComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
