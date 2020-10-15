/**
 * @file eventos.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades da entidade Evento.
 * @version 1.0.1 (14/10/2020)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1,
      Tema: 'Angular',
      Local: 'Belo Horizonte'
    },
    {
      EventoId: 2,
      Tema: '.NET Core',
      Local: 'São Paulo'
    },
    {
      EventoId: 3,
      Tema: 'Angular e .NET Core',
      Local: 'Rio de Janeiro'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
