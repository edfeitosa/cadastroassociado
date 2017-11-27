import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';
import { isNull } from 'util';

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
  public itensOut: any[];

  constructor(
    private modalComponent: ModalComponent
  ) {
    this.telMask = ['(', /[0-9]/, /\d/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/, /\d/]
  }

  ngOnInit() {
    this.form_validation();
    this.formTelefone_group();
    this.itensOut = (!isNull(localStorage.getItem('telefones'))) ? JSON.parse(localStorage.getItem('telefones')) : '';
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
    console.log(this.formTelefone.controls.telefone.value);
    if (this.item_existente(this.formTelefone.controls.telefone.value) == true) {
      this.modal_mens("Telefone já informado...", "O telefone informado, já foi adicionado à lista.", "OK", content);
    } else {
      let itens = [];
      let whatsapp = (this.formTelefone.controls.whatsapp.value) != '' ? 'Este número é usado com WhatsApp' : 'Este número não é usado com WhatsApp';
      let sms = (this.formTelefone.controls.sms.value) != '' ? 'Este número pode receber SMS' : 'Este número não recebe SMS';
      if (isNull(localStorage.getItem('telefones'))) {
        itens.push({
          telefone: this.formTelefone.controls.telefone.value,
          ramal: this.formTelefone.controls.ramal.value,
          whatsapp: whatsapp,
          sms: sms
        });
        localStorage.setItem('telefones', JSON.stringify(itens));
      } else {
        let itens = JSON.parse(localStorage.getItem('telefones'));
        itens.push({
          telefone: this.formTelefone.controls.telefone.value,
          ramal: this.formTelefone.controls.ramal.value,
          whatsapp: whatsapp,
          sms: sms
        });
        localStorage.setItem('telefones', JSON.stringify(itens));
      }
      this.form_validation();
      this.formTelefone_group();
      this.itensOut = (!isNull(localStorage.getItem('telefones'))) ? JSON.parse(localStorage.getItem('telefones')) : '';
    }
  }

  // deleta item
  item_delete(item) {
    let itens = [];
    itens = JSON.parse(localStorage.getItem('telefones'));
    itens.splice(item, 1);
    localStorage.setItem('telefones', JSON.stringify(itens));
    this.itensOut = (!isNull(localStorage.getItem('telefones'))) ? JSON.parse(localStorage.getItem('telefones')) : '';
  }

  // verifica existência
  item_existente(item): boolean {
    let retorno = false;
    if (!isNull(localStorage.getItem('telefones'))) {
      let itens = JSON.parse(localStorage.getItem('telefones'));
      for (let i = 0; i < itens.length; i++) {
        if (item == itens[i].telefone) {
          retorno = true;
        } else {
          retorno = false;
        }
      }
    }
    return retorno;
  }

}