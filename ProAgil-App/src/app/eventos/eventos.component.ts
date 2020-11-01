/**
 * @file eventos.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades e funcionalidades referentes a entidade Evento.
 * @version 1.0.1 (14/10/2020)
 */

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../_models/Evento';
import { EventoService } from './../_services/evento.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Classe responsável por atribuir propriedades e funções relacionadas a entidade Evento.
 */
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {

  eventosFiltrados: Evento[];
  eventos: Evento[];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  modalRef: BsModalRef;
  registerForm: FormGroup;

  // tslint:disable-next-line: variable-name
  _filtroLista = '';

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService
  ) {}

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  /**
   * Função para abrir modal.
   * @param template parâmetro de referência de template do modal.
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.validation();
    this.getEventos();
  }

  /**
   * Função para filtragem de eventos.
   *
   * @param filtrarPor parâmetro de filtragem do evento.
   */
  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  /**
   * Função para exibir imagens.
   */
  alternarImagem(): void {
    this.mostrarImagem = !this.mostrarImagem;
  }

  /**
   * Função para validação dos campos do formulário.
   */
  validation(): void {
    this.registerForm = new FormGroup({
      tema: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      local: new FormControl('', Validators.required),
      dataEvento: new FormControl('', Validators.required),
      imagemURL: new FormControl('', Validators.required),
      qtdPessoas: new FormControl('',
        [Validators.required, Validators.max(120000)]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('',
        [Validators.required, Validators.email])
    });
  }

  /**
   * Função para salvar alterações do Evento.
   *
   */
  salvarAlteracao() {

  }

  /**
   * Função para listar todos os eventos.
   */
  getEventos(): void {
    this.eventoService.getAllEvento().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        console.log(_eventos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
