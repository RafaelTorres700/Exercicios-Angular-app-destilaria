import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from '../sobre/sobre.component';
import { PainelComponent } from '../painel/painel.component';


export const routes: Routes = [


  {
    path: '',
    component: HomeComponent
  },
{
    path: 'painel',
    component: PainelComponent
},

  {
    path: 'servicos',
    component: ServicosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },

  {
    path: 'sobre',
    component: SobreComponent
  }
];
