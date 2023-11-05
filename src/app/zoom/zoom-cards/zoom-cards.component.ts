import { Component, Input } from '@angular/core';
import { Card } from '../card.service';

@Component({
  selector: 'app-zoom-cards',
  templateUrl: './zoom-cards.component.html',
  styleUrls: ['./zoom-cards.component.css']
})

export class ZoomCardsComponent {
  @Input() main_card: Card[] = [];
}
