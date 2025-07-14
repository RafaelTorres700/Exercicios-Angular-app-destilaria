import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutosserviceService } from '../../service/produtosservice.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public produtosService: ProdutosserviceService,
    private router:Router
  ) { }

  // navegarParaDetalhes(produto: any) {
  //   this.produtosService.produtosSendoVistos = produto;
  //   this.router.navigate(['/home']);
  // }

}
