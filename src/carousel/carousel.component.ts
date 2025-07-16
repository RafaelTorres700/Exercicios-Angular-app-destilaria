import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',
  imports: [NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class NgbdCarouselBasic  {


	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
