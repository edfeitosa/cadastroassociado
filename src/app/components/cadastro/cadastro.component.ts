import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ModalComponent } from '../../components/_modal/modal.component';
import { Validation } from '../../functions/validation';
import { isNull } from 'util';

@Component({
  selector: 'svl-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // form pessoa física
  private formFisica: FormGroup;

  // form pessoa jurídica
  private formJuridica: FormGroup;

  // campos form validação
  private cpf: FormControl;
  private email: FormControl;
  private nome: FormControl;
  private rg: FormControl;
  private nascimento: FormControl;
  private emancipado: FormControl;
  private mae: FormControl;
  private conhecido: FormControl;
  private sexo: FormControl;
  private estadoCivil: FormControl;
  private instrucao: FormControl;
  private cnpj: FormControl;
  private razao: FormControl;
  private fantasia: FormControl;
  private empresarial: FormControl;
  private vendedor: FormControl;
  private origem: FormControl;

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;
  public exibeTab: boolean = true;
  public cadastro: string;

  // máscaras
  private cpfMask: Array<string | RegExp>
  private cnpjMask: Array<string | RegExp>
  private dtnascimento: Array<string | RegExp>

  constructor(
    private router: Router, 
    private modalComponent: ModalComponent
  ) {
    this.cpfMask = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/]
    this.cnpjMask = [/[0-9]/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '/', /[0-9]/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/]
    this.dtnascimento = [/[0-9]/, /\d/, '/', /[0-9]/, /\d/, '/', /[0-9]/, /\d/, /\d/, /\d/]
  }

  ngOnInit() {
    this.create_navigation();
    this.form_validation();
    this.formFisica_group();
    this.formJuridica_group();
    this.controle_exibicao("fisica", "juridica", "botao-a", "botao-b");
    this.verifica_cadastro();
  }

  // verifica que tipo de cadastro foi iniciado
  verifica_cadastro() {
    if (localStorage.getItem('cadastro') != null) {
      this.cadastro = localStorage.getItem('cadastro');
    }
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

  // form pessoa juridica
  formFisica_group() {
    this.formFisica = new FormGroup({
      cpf: this.cpf,
      email: this.email,
      nome: this.nome,
      rg: this.rg,
      nascimento: this.nascimento,
      emancipado: this.emancipado,
      mae: this.mae,
      conhecido: this.conhecido,
      sexo: this.sexo,
      estadoCivil: this.estadoCivil,
      instrucao: this.instrucao
    });
  }

  // form pessoa jurídica
  formJuridica_group() {
    this.formJuridica = new FormGroup({
      cnpj: this.cnpj,
      razao: this.razao,
      fantasia: this.fantasia,
      empresarial: this.empresarial,
      vendedor: this.vendedor,
      origem: this.origem
    });
  }

  // validação inputs
  form_validation() {
    // form física
    this.cpf = new FormControl(!isNull(localStorage.getItem('cpf')) ? localStorage.getItem('cpf') : '', Validators.required);
    this.nome = new FormControl(!isNull(localStorage.getItem('nome')) ? localStorage.getItem('nome') : '', Validators.required);
    this.email = new FormControl(!isNull(localStorage.getItem('email')) ? localStorage.getItem('email') : '', Validators.nullValidator);
    this.rg = new FormControl(!isNull(localStorage.getItem('rg')) ? localStorage.getItem('rg') : '', Validators.nullValidator);
    this.nascimento = new FormControl(!isNull(localStorage.getItem('nascimento')) ? localStorage.getItem('nascimento') : '', Validators.nullValidator);
    this.emancipado = new FormControl(!isNull(localStorage.getItem('emancipado')) ? localStorage.getItem('emancipado') : '', Validators.nullValidator);
    this.mae = new FormControl(!isNull(localStorage.getItem('mae')) ? localStorage.getItem('mae') : '', Validators.nullValidator);
    this.conhecido = new FormControl(!isNull(localStorage.getItem('conhecido')) ? localStorage.getItem('conhecido') : '', Validators.nullValidator);
    this.sexo = new FormControl(!isNull(localStorage.getItem('sexo')) ? localStorage.getItem('sexo') : 'm', Validators.nullValidator);
    this.estadoCivil = new FormControl(!isNull(localStorage.getItem('estadoCivil')) ? localStorage.getItem('estadoCivil') : 'sel', Validators.nullValidator);
    this.instrucao = new FormControl(!isNull(localStorage.getItem('instrucao')) ? localStorage.getItem('instrucao') : 'sel', Validators.nullValidator);
    // form jurídica
    this.cnpj = new FormControl(!isNull(localStorage.getItem('cnpj')) ? localStorage.getItem('cnpj') : '', Validators.required);
    this.razao = new FormControl(!isNull(localStorage.getItem('razao')) ? localStorage.getItem('razao') : '', Validators.required);
    this.fantasia = new FormControl(!isNull(localStorage.getItem('fantasia')) ? localStorage.getItem('fantasia') : '', Validators.nullValidator);
    this.empresarial = new FormControl(!isNull(localStorage.getItem('empresarial')) ? localStorage.getItem('empresarial') : '', Validators.nullValidator);
    this.vendedor = new FormControl(!isNull(localStorage.getItem('vendedor')) ? localStorage.getItem('vendedor') : '', Validators.nullValidator);
    this.origem = new FormControl(!isNull(localStorage.getItem('origem')) ? localStorage.getItem('origem') : '', Validators.nullValidator);
  }

  // controle de exibição de divs
  exibir(div) {
    document.getElementById(div).style.display = "block";
  }

  ocultar(div) {
    document.getElementById(div).style.display = "none";
  }

  botao_ativo(div) {
    document.getElementById(div).className = "botao-ativo";
  }

  botao_inativo(div) {
    document.getElementById(div).className = "botao-inativo";
  }

  controle_exibicao(exibir, ocultar, ativo, inativo) {
    this.exibir(exibir);
    this.ocultar(ocultar);
    this.botao_ativo(ativo);
    this.botao_inativo(inativo);
  }

  // navegação
  create_navigation() {
    let etapas = [];
    etapas.push({
      etapa: "1",
      url: "cadastro"
    });
    localStorage.setItem('etapas', JSON.stringify(etapas));
  }

  add_navigation(etapa, url): any[] {
    let etapas = [];
    let etapasExistentes = JSON.parse(localStorage.getItem('etapas'));
    var keys = Object.keys(etapasExistentes);
    for (let i = 0; i < keys.length; i++) {
      etapas.push({
        etapa: etapasExistentes[i].etapa,
        url: etapasExistentes[i].url
      });
    }
    etapas.push({
      etapa: etapa,
      url: url
    });
    return etapas;
  }

  // submit pessoa física
  formFisica_submit(content) {
    if (new Validation().valida_cpf(this.formFisica.controls.cpf.value) == false) {
      this.modal_mens("Algo está errado...", "O CPF informado não é válido. Verifique o valor digitado e tente novamente.", "OK", content);
    } else {
      localStorage.setItem('cpf', this.formFisica.controls.cpf.value);
      localStorage.setItem('email', this.formFisica.controls.email.value);
      localStorage.setItem('nome', this.formFisica.controls.nome.value);
      localStorage.setItem('rg', this.formFisica.controls.rg.value);
      localStorage.setItem('nascimento', this.formFisica.controls.nascimento.value);
      localStorage.setItem('emancipado', this.formFisica.controls.emancipado.value);
      localStorage.setItem('mae', this.formFisica.controls.mae.value);
      localStorage.setItem('conhecido', this.formFisica.controls.conhecido.value);
      localStorage.setItem('sexo', this.formFisica.controls.sexo.value);
      localStorage.setItem('estadoCivil', this.formFisica.controls.estadoCivil.value);
      localStorage.setItem('instrucao', this.formFisica.controls.instrucao.value);
      localStorage.setItem('cadastro', 'fisica');
      localStorage.setItem('etapas', JSON.stringify(this.add_navigation("2", "telefone")));
      window.location.reload();
    }
  }

  // submit pessoa jurídica
  formJuridica_submit(content) {
    if (new Validation().valida_cnpj(this.formFisica.controls.cnpj.value) == false) {
      this.modal_mens("Algo está errado...", "O CNPJ informado não é válido. Verifique o valor digitado e tente novamente.", "OK", content);
    } else {
      localStorage.setItem('cnpj', this.formFisica.controls.cnpj.value);
      localStorage.setItem('razao', this.formFisica.controls.razao.value);
      localStorage.setItem('fantasia', this.formFisica.controls.fantasia.value);
      localStorage.setItem('empresarial', this.formFisica.controls.empresarial.value);
      localStorage.setItem('vendedor', this.formFisica.controls.vendedor.value);
      localStorage.setItem('origem', this.formFisica.controls.origem.value);
      localStorage.setItem('cadastro', 'juridica');
      localStorage.setItem('etapas', JSON.stringify(this.add_navigation("2", "sociedade")));
    }
  }

}
