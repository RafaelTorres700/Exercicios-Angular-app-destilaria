import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',
  imports: [NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class NgbdCarouselBasic  {


	images = [
     '/Gin-Bombay-Sapphire.jpg',
    '/conhaque.jpg',
    '/fotos-do-jose-cuervo.jpg'
  ];
}
