import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable, EventEmitter } from '@angular/core';

@Component({
  selector: 'svl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult: string;

  @Input() titulo: string;
  @Input() mensagem: string;
  @Input() botao: string;

  public tituloOut: string;
  public mensagemOut: string;
  public botaoOut: string;

  constructor(private modalService: NgbModal, private modalService2: NgbModal) { }

  ngOnInit() {
    this.tituloOut = this.titulo;
    this.mensagemOut = this.mensagem;
    this.tituloOut = this.titulo;
  }

  open2(content) { 
    this.modalService.open(content).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }

  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

}
