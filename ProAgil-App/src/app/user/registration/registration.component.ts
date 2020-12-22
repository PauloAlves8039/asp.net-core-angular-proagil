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
import { User } from './../../_models/User';
import { AuthService } from './../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  constructor(
    private authService: AuthService,
    public router: Router,
    public fb: FormBuilder,
    private toastr: ToastrService
  ) {}

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

  cadastrarUsuario() {
    if (this.registerForm.valid) {
      this.user = Object.assign(
        {
          password: this.registerForm.get('passwords.password').value,
        },
        this.registerForm.value
      );
      this.authService.register(this.user).subscribe(
        () => {
          this.router.navigate(['/user/login']);
          this.toastr.success('Cadastro Realizado!');
        },
        (error) => {
          const erro = error.error;
          erro.array.array.forEach((element) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Cadastro Duplicado!');
                break;

              default:
                this.toastr.error(`Erro no Cadastro! CODE: ${element.code}`);
                break;
            }
          });
        }
      );
    }
  }
}
