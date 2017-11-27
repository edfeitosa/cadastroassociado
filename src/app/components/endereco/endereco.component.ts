import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';

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
    this.cepMask = [/[0-9]/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/]
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
  form_validation() {
    this.cep = new FormControl('', Validators.required);
    this.logradouro = new FormControl('', Validators.required);
    this.numero = new FormControl('', Validators.nullValidator);
    this.bairro = new FormControl('', Validators.required);
    this.complemento = new FormControl('', Validators.nullValidator);
    this.estado = new FormControl('', Validators.nullValidator);
    this.municipio = new FormControl('', Validators.nullValidator);
  }

  // submit
  formEndereco_submit(content) {
    console.log("Funciona!");
    this.modal_mens("Algo está errado...", "O CPF informado não é válido. Verifique o valor digitado e tente novamente.", "OK", content);
  }

}
