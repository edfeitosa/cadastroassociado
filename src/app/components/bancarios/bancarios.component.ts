import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';
import { Validation } from '../../functions/validation';
import { isNull } from 'util';

@Component({
  selector: 'svl-bancarios',
  templateUrl: './bancarios.component.html',
  styleUrls: ['./bancarios.component.css']
})
export class BancariosComponent implements OnInit {

  // form pessoa física
  private formBancarios: FormGroup;
  private cpf: FormControl;
  private titular: FormControl;
  private banco: FormControl;
  private agencia: FormControl;
  private conta: FormControl;
  private digito: FormControl;
  private variacao: FormControl;

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;

  // máscaras
  private cpfMask: Array<string | RegExp>

  constructor(
    private router: Router, 
    private modalComponent: ModalComponent
  ) {
    this.cpfMask = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/]
  }

  ngOnInit() {
    this.formBancarios_validation();
    this.formBancarios_group();
  }

  // modal
  open(content) {
    this.modalComponent.open2(content);
  }

  modal_mens(titulo, mensagem, botao, content) {
    this.tituloOut = titulo;
    this.mensagemOut = mensagem;
    this.botaoOut = botao;
    this.open(content);
  }

  // form dados bancários
  formBancarios_group() {
    this.formBancarios = new FormGroup({
      cpf: this.cpf,
      titular: this.titular,
      banco: this.banco,
      agencia: this.agencia,
      conta: this.conta,
      digito: this.digito,
      variacao: this.variacao
    });
  }

  formBancarios_validation() {
    this.cpf = new FormControl(!isNull(localStorage.getItem('cpf')) ? localStorage.getItem('cpf') : '', Validators.required);
    this.titular = new FormControl(!isNull(localStorage.getItem('titular')) ? localStorage.getItem('titular') : '', Validators.required);
    this.banco = new FormControl(!isNull(localStorage.getItem('banco')) ? localStorage.getItem('banco') : '0', Validators.required);
    this.agencia = new FormControl(!isNull(localStorage.getItem('agencia')) ? localStorage.getItem('agencia') : '0', Validators.required);
    this.conta = new FormControl(!isNull(localStorage.getItem('conta')) ? localStorage.getItem('conta') : '', Validators.required);
    this.digito = new FormControl(!isNull(localStorage.getItem('digito')) ? localStorage.getItem('digito') : '', Validators.nullValidator);
    this.variacao = new FormControl(!isNull(localStorage.getItem('variacao')) ? localStorage.getItem('variacao') : '', Validators.nullValidator);
  }

  // submit
  formBancarios_submit(content) {
    if (new Validation().valida_cpf(this.formBancarios.controls.cpf.value) == false) {
      this.modal_mens("Algo está errado...", "O CPF informado não é válido. Verifique o valor digitado e tente novamente.", "OK", content);
    } else if (this.formBancarios.controls.banco.value == "0") {
      this.modal_mens("Algo está errado...", "Informe o nome do banco antes de continuar.", "OK", content);
    } else if (this.formBancarios.controls.agencia.value == "0") {
      this.modal_mens("Algo está errado...", "Informe a agência da conta antes de continuar.", "OK", content);
    } else {
      localStorage.setItem('cpf', this.formBancarios.controls.cpf.value);
      localStorage.setItem('titular', this.formBancarios.controls.titular.value);
      localStorage.setItem('banco', this.formBancarios.controls.banco.value);
      localStorage.setItem('agencia', this.formBancarios.controls.agencia.value);
      localStorage.setItem('conta', this.formBancarios.controls.conta.value);
      localStorage.setItem('digito', this.formBancarios.controls.digito.value);
      localStorage.setItem('variacao', this.formBancarios.controls.variacao.value);
      this.modal_mens("Sucesso", "Dados adicionados com sucesso.", "OK", content);
    }
  }

}
