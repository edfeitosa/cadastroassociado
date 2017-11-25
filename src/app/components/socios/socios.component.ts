import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';

@Component({
  selector: 'svl-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  // form
  private formSocio: FormGroup;
  private cpf: FormControl;
  private nome: FormControl;

  // máscara
  private cpfMask: Array<string | RegExp>

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;

  constructor(
    private modalComponent: ModalComponent
  ) {
    this.cpfMask = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/]
  }

  ngOnInit() {
    this.form_validation();
    this.formSocio_group();
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
  formSocio_group() {
    this.formSocio = new FormGroup({
      cpf: this.cpf,
      nome: this.nome
    });
  }

  // validação inputs
  form_validation() {
    this.cpf = new FormControl('', Validators.required);
    this.nome = new FormControl('', Validators.required);
  }

  // submit
  formSocio_submit(content) {
    console.log("Funciona!");
  }

}
