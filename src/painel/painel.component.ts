import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-painel',
  imports: [FormsModule, ReactiveFormsModule,RouterModule, CommonModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
  providers: [AuthService]
})
export class PainelComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  enviarCadastro() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Formulário inválido');
    }
  }

}
