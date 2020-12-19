/**
 * @file registration.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades e funcionalidades referentes aos regristros do login do usuário.
 * @version 1.0.1 (16/12/2020)
 */

import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      passwords: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(4)]],
          confirmPassword: ['', Validators.required],
        },
        {
          validator: this.compararSenhas,
        }
      ),
    });
  }

  cadastrarUsuario() {
    console.log('Cadastrar Usuário');
  }

  compararSenhas(fb: FormGroup) {
    const confirmSenhaCtrl = fb.get('confirmPassword');
    if (
      confirmSenhaCtrl.errors == null ||
      'mismarch' in confirmSenhaCtrl.errors
    ) {
      if (fb.get('password').value !== confirmSenhaCtrl.value) {
        confirmSenhaCtrl.setErrors({ mismatch: true });
      } else {
        confirmSenhaCtrl.setErrors(null);
      }
    }
  }
}
