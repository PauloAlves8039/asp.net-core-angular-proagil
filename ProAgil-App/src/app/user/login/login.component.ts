/**
 * @file login.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades e funcionalidades referentes ao login do usuário.
 * @version 1.0.1 (16/12/2020)
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  titulo = 'Login';
  model: any = {};

  constructor(public router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log();
  }
}
