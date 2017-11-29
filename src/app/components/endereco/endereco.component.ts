import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { default as cep } from 'cep-promise';

import { ModalComponent } from '../../components/_modal/modal.component';
import { Validation } from 'app/functions/validation';
import { Combos } from '../../functions/combos';
import { isNull } from 'util';

@Component({
  selector: 'svl-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  // form valida CEP
  private formValidaCep: FormGroup;
  private buscaCep: FormControl;

  // form endereço
  private formEndereco: FormGroup;
  private cep: FormControl;
  private logradouro: FormControl;
  private numero: FormControl;
  private bairro: FormControl;
  private complemento: FormControl;
  private estado: FormControl;
  private municipio: FormControl;
  private cepMask: Array<string | RegExp>

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;
  public estadosOut: any[];
  public itensOut: any[];

  // controla exibição dos forms
  public exibeValidaCep: boolean = true;
  public exibeEndereco: boolean = false;

  constructor(
    private modalComponent: ModalComponent
  ) {
    this.cepMask = [/[0-9]/, /\d/, /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/]
  }

  ngOnInit() {
    this.formEndereco_validation();
    this.formEndereco_group();
    this.formBuscaCep_validation();
    this.formBuscaCep_group();
    this.exibeValidaCep;
    this.exibeEndereco;
    this.estadosOut = new Combos().estados();
    this.itensOut = (!isNull(localStorage.getItem('endereco'))) ? JSON.parse(localStorage.getItem('endereco')) : '';
  }

  // modal
  open(content) {
    this.modalComponent.open2(content);
  }

  // carrega modal
  modal_mens(titulo, mensagem, botao, content) {
    this.tituloOut = titulo;
    this.mensagemOut = mensagem;
    this.botaoOut = botao;
    this.open(content);
  }

  // form valida cep
  formBuscaCep_group() {
    this.formValidaCep = new FormGroup({
      buscaCep: this.buscaCep
    });
  }

  formBuscaCep_validation(cepVal = '') {
    this.buscaCep = new FormControl(cepVal, Validators.required);
  }

  // form endereço
  formEndereco_group() {
    this.formEndereco = new FormGroup({
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      bairro: this.bairro,
      complemento: this.complemento,
      estado: this.estado,
      municipio: this.municipio
    });
  }

  formEndereco_validation(
    cepVal = '',
    logradouroVal = '',
    bairroVal = '',
    estadoVal = '',
    municipioVal = ''
  ) {
    this.cep = new FormControl(cepVal, Validators.required);
    this.logradouro = new FormControl(logradouroVal, Validators.required);
    this.numero = new FormControl('', Validators.compose([ Validators.nullValidator ]));
    this.bairro = new FormControl(bairroVal, Validators.required);
    this.complemento = new FormControl('', Validators.nullValidator);
    this.estado = new FormControl(estadoVal, Validators.nullValidator);
    this.municipio = new FormControl(municipioVal, Validators.required);
  }

  // verifica se cep é válido
  valida_cep(numCep, content) {
    let retorno = [];
    return cep(numCep.replace(/[^\d]+/g,''))
      .then(data => {
        this.formBuscaCep_validation();
        this.formBuscaCep_group();
        this.exibeValidaCep = false;
        this.exibeEndereco = true;
        this.formEndereco_validation(data.cep, data.street, data.neighborhood, data.state, data.city);
        this.formEndereco_group();
      })
      .catch(data => {
        this.formEndereco_validation();
        this.formEndereco_group();
        this.exibeEndereco = false;
        this.exibeValidaCep = true;
        this.formBuscaCep_validation('');
        this.formBuscaCep_group();
        this.modal_mens("Algo está errado...", "O CEP informado não é válido ou não foi encontrado. Verifique o número digitado e tente novamente.", "OK", content);
      });
  }

  // busca cep
  formValidaCep_submit(content) {
    this.valida_cep(this.formValidaCep.controls.buscaCep.value, content);
  }

  // submit
  formEndereco_submit(content) {
    if (this.item_existente(this.formEndereco.controls.cep.value) == true) {
      this.modal_mens("CEP já informado...", "O CEP que você está tentando adicionar já está na lista.", "OK", content);
    } else {
      let itens = [];
      if (isNull(localStorage.getItem('endereco'))) {
        let numero = (this.formEndereco.controls.numero.value != '') ? this.formEndereco.controls.numero.value : 's/n'; 
        itens.push({
          cep: this.formEndereco.controls.cep.value,
          logradouro: this.formEndereco.controls.logradouro.value,
          numero: numero,
          bairro: this.formEndereco.controls.bairro.value,
          complemento: this.formEndereco.controls.complemento.value,
          municipio: this.formEndereco.controls.municipio.value,
          estado: this.formEndereco.controls.estado.value
        });
        localStorage.setItem('endereco', JSON.stringify(itens));
      } else {
        let numero = (this.formEndereco.controls.numero.value != '') ? this.formEndereco.controls.numero.value : 's/n'; 
        let itens = JSON.parse(localStorage.getItem('endereco'));
        itens.push({
          cep: this.formEndereco.controls.cep.value,
          logradouro: this.formEndereco.controls.logradouro.value,
          numero: numero,
          bairro: this.formEndereco.controls.bairro.value,
          complemento: this.formEndereco.controls.complemento.value,
          municipio: this.formEndereco.controls.municipio.value,
          estado: this.formEndereco.controls.estado.value
        });
        localStorage.setItem('endereco', JSON.stringify(itens));
      }
      this.formEndereco_validation();
      this.formEndereco_group();
      this.exibeEndereco = false;
      this.exibeValidaCep = true;
      this.itensOut = (!isNull(localStorage.getItem('endereco'))) ? JSON.parse(localStorage.getItem('endereco')) : '';
    }
  }

  // deleta item
  item_delete(item) {
    let itens = [];
    itens = JSON.parse(localStorage.getItem('endereco'));
    itens.splice(item, 1);
    localStorage.setItem('endereco', JSON.stringify(itens));
    this.itensOut = (!isNull(localStorage.getItem('endereco'))) ? JSON.parse(localStorage.getItem('endereco')) : '';
  }

  // verifica existência
  item_existente(item): boolean {
    let retorno = false;
    if (!isNull(localStorage.getItem('endereco'))) {
      let itens = JSON.parse(localStorage.getItem('endereco'));
      for (let i = 0; i < itens.length; i++) {
        if (item == itens[i].cep) {
          retorno = true;
        } else {
          retorno = false;
        }
      }
    }
    return retorno;
  }

  cancela_endereco() {
    this.exibeValidaCep = true;
    this.exibeEndereco = false;
  }

}
