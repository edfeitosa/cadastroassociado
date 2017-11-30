import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';
import { Validation } from '../../functions/validation';
import { isNull } from 'util';

@Component({
  selector: 'svl-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private formClientes: FormGroup;
  private fatura: FormControl;
  private fantasiaServeloja: FormControl;
  private mcc: FormControl;
  private implantacao: FormControl;
  private franquia: FormControl;
  private mensalidade: FormControl;

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;

  constructor(
    private router: Router, 
    private modalComponent: ModalComponent
  ) { }

  ngOnInit() {
    this.formClientes_validation();
    this.formClientes_group();
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

  // form clientes
  formClientes_group() {
    this.formClientes = new FormGroup({
      fatura: this.fatura,
      fantasiaServeloja: this.fantasiaServeloja,
      mcc: this.mcc,
      implantacao: this.implantacao,
      franquia: this.franquia,
      mensalidade: this.mensalidade
    });
  }

  formClientes_validation() {
    this.fatura = new FormControl(!isNull(localStorage.getItem('fatura')) ? localStorage.getItem('fatura') : '', Validators.required);
    this.fantasiaServeloja = new FormControl(!isNull(localStorage.getItem('fantasiaServeloja')) ? localStorage.getItem('fantasiaServeloja') : '', Validators.required);
    this.mcc = new FormControl(!isNull(localStorage.getItem('mcc')) ? localStorage.getItem('mcc') : '0', Validators.required);
    this.implantacao = new FormControl(!isNull(localStorage.getItem('implantacao')) ? localStorage.getItem('implantacao') : '', Validators.nullValidator);
    this.franquia = new FormControl(!isNull(localStorage.getItem('franquia')) ? localStorage.getItem('franquia') : '0', Validators.nullValidator);
    this.mensalidade = new FormControl(!isNull(localStorage.getItem('mensalidade')) ? localStorage.getItem('mensalidade') : '0', Validators.nullValidator);
  }

  // submit
  formClientes_submit(content) {
    localStorage.setItem('fatura', this.formClientes.controls.fatura.value);
    localStorage.setItem('fantasiaServeloja', this.formClientes.controls.fantasiaServeloja.value);
    localStorage.setItem('mcc', this.formClientes.controls.mcc.value);
    localStorage.setItem('implantacao', this.formClientes.controls.implantacao.value);
    localStorage.setItem('franquia', this.formClientes.controls.franquia.value);
    localStorage.setItem('mensalidade', this.formClientes.controls.mensalidade.value);
    this.modal_mens("Sucesso", "Dados adicionados com sucesso.", "OK", content);
  }
}
