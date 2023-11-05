import { Component, Input } from '@angular/core';
import { SubectCardService } from '../subect-card.service';

@Component({
  selector: 'app-subect-cards',
  templateUrl: './subect-cards.component.html',
  styleUrls: ['./subect-cards.component.css']
})
export class SubectCardsComponent {
  @Input() subject_card: SubectCardService[] = [];
}
