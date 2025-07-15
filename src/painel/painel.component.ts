import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-painel',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
  providers: [AuthService]
})
export class PainelComponent {
usuario = '';
 senha = '';
 erro = false;
 constructor(private auth: AuthService, private router: Router) {}
 entrar() {
 if (this.auth.login(this.usuario, this.senha)) {
 this.router.navigate(['']);
 } else {
 this.erro = true;
 }
 }
}
