import { Component, Input } from '@angular/core';
import { popuar_zoom } from '../popular-card.service';

@Component({
  selector: 'app-popular-zoom-cards',
  templateUrl: './popular-zoom-cards.component.html',
  styleUrls: ['./popular-zoom-cards.component.css']
})
export class PopularZoomCardsComponent {
  @Input() popuar_zoom: popuar_zoom[] = [];
}
