/**
 * @file eventos.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades da entidade Evento.
 * @version 1.0.1 (14/10/2020)
 */

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  eventosFiltrados: any = [];
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  /**
   * Função para exibir imagem.
   */
  alternarImagem(): void {
    this.mostrarImagem = !this.mostrarImagem;
  }

  /**
   * Função responsável por listar todos os eventos.
   */
  getEventos(): void {
    this.http.get('http://localhost:5000/api/values').subscribe(
      (response) => {
        this.eventos = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
