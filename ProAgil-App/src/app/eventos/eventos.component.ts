/**
 * @file eventos.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades e funcionalidades referentes a entidade Evento.
 * @version 1.0.1 (14/10/2020)
 */

import { Component, OnInit } from '@angular/core';
import { Evento } from '../_models/Evento';
import { EventoService } from './../_services/evento.service';

/**
 * Classe responsável por atribuir propriedades e funções relacionadas a entidade Evento.
 */
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  _filtroLista: string;

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventosFiltrados: Evento[];
  eventos: Evento[];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;

  constructor(private eventoService: EventoService ) {}

  ngOnInit(): void {
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
