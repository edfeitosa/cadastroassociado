import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';

@Component({
  selector: 'svl-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {

  private formTelefone: FormGroup;
  private telefone: FormControl;
  private ramal: FormControl;
  private whatsapp: FormControl;
  private sms: FormControl;
  private telMask: Array<string | RegExp>

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;
  public telefones: any[];

  constructor(
    private modalComponent: ModalComponent
  ) {
    this.telMask = ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]
  }

  ngOnInit() {
    this.form_validation();
    this.formTelefone_group();
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
  formTelefone_group() {
    this.formTelefone = new FormGroup({
      telefone: this.telefone,
      ramal: this.ramal,
      whatsapp: this.whatsapp,
      sms: this.sms
    });
  }

  // validação inputs
  form_validation() {
    this.telefone = new FormControl('', Validators.required);
    this.ramal = new FormControl('', Validators.nullValidator);
    this.whatsapp = new FormControl('', Validators.nullValidator);
    this.sms = new FormControl('', Validators.nullValidator);
  }

  // submit
  formTelefone_submit(content) {
    /* this.telefones.push({
      telefone: this.formTelefone.controls.telefone.value,
      ramal: this.formTelefone.controls.ramal.value,
      whatsapp: this.formTelefone.controls.whatsapp.value,
      sms: this.formTelefone.controls.sms.value
    });
    this.modal_mens('Sucesso', 'Telefone adicionado com sucesso', 'OK', content); */
  }

}