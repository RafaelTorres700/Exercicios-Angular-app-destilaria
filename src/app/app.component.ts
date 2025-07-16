import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercicio-rotas';
  currentRoute = '';

  constructor(private router: Router) {
    // Monitorar mudanças de rota
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  showNavigation(): boolean {
    return this.currentRoute !== '/login' && this.currentRoute !== '/';
  }

  logout(): void {
    // Implementar logout
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
