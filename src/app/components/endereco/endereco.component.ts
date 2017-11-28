import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { default as cep } from 'cep-promise';

import { ModalComponent } from '../../components/_modal/modal.component';
import { Validation } from 'app/functions/validation';

@Component({
  selector: 'svl-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

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

  constructor(
    private modalComponent: ModalComponent
  ) {
    this.cepMask = [/[0-9]/, /\d/, /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/]
  }

  ngOnInit() {
    this.form_validation();
    this.formEndereco_group();
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

  // form pessoa jurídica
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

  // validação inputs
  form_validation(
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
    this.municipio = new FormControl(municipioVal, Validators.nullValidator);
  }

  // verifica se cep é válido
  valida_cep(numCep, content) {
    let retorno = [];
    return cep(numCep.replace(/[^\d]+/g,''))
      .then(data => {
        this.form_validation(data.cep, data.street, data.neighborhood, data.state, data.city);
        this.formEndereco_group();
      })
      .catch(data => {
        this.form_validation(numCep);
        this.formEndereco_group();
        this.modal_mens("Algo está errado...", "O CEP informado não é válido ou não foi encontrado. Verifique o número digitado e tente novamente.", "OK", content);
      });
  }

  // busca cep
  

  // submit
  formEndereco_submit(content) {
    this.valida_cep(this.formEndereco.controls.cep.value, content);
  }

}
