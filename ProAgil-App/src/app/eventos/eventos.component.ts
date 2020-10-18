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

  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
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
