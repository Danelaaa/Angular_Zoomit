import { Component, Input } from '@angular/core';
import { proffesionals_card } from '../proffesionals-card.service';

@Component({
  selector: 'app-proffesionals-main-cards',
  templateUrl: './proffesionals-main-cards.component.html',
  styleUrls: ['./proffesionals-main-cards.component.css']
})
export class ProffesionalsMainCardsComponent {
  @Input() proffesionals_card: proffesionals_card[] = [];
}
