import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Usuário ou senha incorretos!';
    }
  }
}
