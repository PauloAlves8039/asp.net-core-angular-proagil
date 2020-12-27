/**
 * @file evento-edit.component.ts
 * @author: Paulo Alves
 * @description: responsável pela atribuição das propriedades e funcionalidades referentes a edição do Evento.
 * @version 1.0.1 (24/12/2020)
 */

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import { EventoService } from 'src/app/_services/evento.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Evento } from 'src/app/_models/Evento';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css'],
})
export class EventoEditComponent implements OnInit {
  titulo = 'Editar Evento';
  evento: Evento = new Evento();
  imagemURL = 'assets/img/upload.png';
  registerForm: FormGroup;
  file: File;

  get lotes(): FormArray {
    return <FormArray>this.registerForm.get('lotes');
  }

  get redesSociais(): FormArray {
    return <FormArray>this.registerForm.get('redesSociais');
  }

  constructor(
    private eventoService: EventoService,
    private fb: FormBuilder,
    private localService: BsLocaleService,
    private toastr: ToastrService
  ) {
    this.localService.use('pt-br');
  }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.registerForm = this.fb.group({
      tema: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      local: ['', Validators.required],
      dataEvento: ['', Validators.required],
      imagemURL: [''],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lotes: this.fb.array([this.criaLote()]),
      redesSociais: this.fb.array([this.criaRedeSocial()]),
    });
  }

  criaLote(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      quantidade: ['', Validators.required],
      preco: ['', Validators.required],
      dataInicio: [''],
      dataFim: [''],
    });
  }

  adicionarLote() {
    this.lotes.push(this.criaLote());
  }

  adicionarRedeSocial() {
    this.redesSociais.push(this.criaRedeSocial());
  }

  criaRedeSocial(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  onFileChange(file: FileList) {
    const reader = new FileReader();
    reader.onload = (event: any) => (this.imagemURL = event.target.result);
    reader.readAsDataURL(file[0]);
  }
}
