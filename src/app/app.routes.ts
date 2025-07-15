import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { PainelComponent } from '../painel/painel.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PainelComponent // Tela de login
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'sobre',
    component: SobreComponent,
    canActivate: [authGuard]
  },
  {
    path: 'servicos',
    component: ServicosComponent,
    canActivate: [authGuard]
  },
  {
    path: 'contato',
    component: ContatoComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
