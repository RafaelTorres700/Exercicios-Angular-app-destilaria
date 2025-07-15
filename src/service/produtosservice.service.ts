import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosserviceService {

  constructor() { }

 minhavariavel = 'dentro de service';

  produtoSendoVisto:any = null


produtos = [
  {
    foto: '/black-label.jpg',
    rotulo: 'Whisky Johnnie Walker Black Label',
    detalhe: 'Whisky escocês blended de 12 anos, com notas defumadas e sabor equilibrado. Uma das marcas mais respeitadas do mundo.'
  },
  {
    foto: '/gray-goose.jpg',
    rotulo: 'Vodka Grey Goose',
    detalhe: 'Vodka francesa premium produzida com trigo francês de inverno e água pura dos Alpes. Sabor suave e cristalino.'
  },
  {
    foto: '/Gin-Bombay-Sapphire.jpg',
    rotulo: 'Gin Bombay Sapphire',
    detalhe: 'Gin premium inglês com 10 botânicos cuidadosamente selecionados. Sabor complexo e aromático com notas cítricas.'
  },
  {
    foto: '/Rum-Bacardi-8-Anos.jpg',
    rotulo: 'Rum Bacardi 8 Anos',
    detalhe: 'Rum dourado envelhecido por 8 anos em barris de carvalho. Sabor suave com notas de baunilha e caramelo.'
  },
  {
    foto: '/fotos-do-jose-cuervo.jpg',
    rotulo: 'Tequila Jose Cuervo Tradicional',
    detalhe: 'Tequila mexicana 100% agave azul, produzida tradicionalmente desde 1795. Sabor autêntico com notas herbais.'
  },
  {
    foto: '/conhaque.jpg',
    rotulo: 'Conhaque Hennessy VS',
    detalhe: 'Cognac francês da região de Cognac, blend de mais de 40 eaux-de-vie. Sabor frutado com notas de carvalho.'
  }
];



}
