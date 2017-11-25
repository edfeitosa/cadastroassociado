import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'svl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public navOut: any[];

  constructor() { }

  ngOnInit() {
    this.navOut = this.navigation();
  }

  navigation(): any[] {
    if (!isNull(localStorage.getItem('cadastro'))) {
      if (localStorage.getItem('cadastro')) {
        return this.nav(6);
      } else {
        return this.nav(7);
      }
    } else {
      return this.nav_padrao();
    }
  }

  nav(qtd: number): any[] {
    let etapas = [];
    let etapasExistentes = JSON.parse(localStorage.getItem('etapas'));
    console.log(etapasExistentes);
    var keys = Object.keys(etapasExistentes);
    console.log(keys);
    console.log(keys.length);
    let vazio = keys.length + 1;
    console.log(vazio);
    // adiciona etapas existente
    for (let i = 0; i <= keys.length; i++) {
      etapas.push({
        etapa: etapasExistentes[i].etapa,
        url: etapasExistentes[i].url
      });
    }
    // adiciona numeração para futuras etapas
    for (let i = vazio; i <= qtd; i++) {
      etapas.push({etapa: i, url: ""});
    }
    return etapas;
  }

  nav_padrao(): any[] {
    let etapas = [];
    for (let i = 1; i <= 6; i++) {
      if (i == 1) {
        etapas.push({etapa: i, url: "cadastro"});
      } else {
        etapas.push({etapa: i, url: ""});
      }
    }
    return etapas;
  }

}
