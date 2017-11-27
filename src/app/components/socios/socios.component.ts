import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';
import { Validation } from '../../functions/validation';
import { isNull } from 'util';

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
  public itensOut: any[];

  constructor(
    private modalComponent: ModalComponent,
    private router: Router
  ) {
    this.cpfMask = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/]
  }

  ngOnInit() {
    this.form_validation();
    this.formSocio_group();
    this.itensOut = (!isNull(localStorage.getItem('socios'))) ? JSON.parse(localStorage.getItem('socios')) : '';
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
    if (new Validation().valida_cpf(this.formSocio.controls.cpf.value) == false) {
      this.modal_mens("Algo está errado...", "O CPF informado não é válido. Verifique o valor digitado e tente novamente.", "OK", content);
    } else {
      let itens = [];
      if (isNull(localStorage.getItem('socios'))) {
        itens.push({
          id: 0,
          cpf: this.formSocio.controls.cpf.value,
          nome: this.formSocio.controls.nome.value
        });
        localStorage.setItem('socios', JSON.stringify(itens));
      } else {
        let itens = [];
        itens = JSON.parse(localStorage.getItem('socios'));
        let total = itens.length;
        itens.push({
          id: total,
          cpf: this.formSocio.controls.cpf.value,
          nome: this.formSocio.controls.nome.value
        });
        localStorage.setItem('socios', JSON.stringify(itens));
      }
    }
    window.location.reload();
  }
}
