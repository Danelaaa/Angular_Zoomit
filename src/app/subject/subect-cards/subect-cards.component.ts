import { Component, Input, OnInit } from '@angular/core';
import { SubectCardService } from '../subect-card.service';
import { DataService } from '../htpp-service.service';

@Component({
  selector: 'app-subect-cards',
  templateUrl: './subect-cards.component.html',
  styleUrls: ['./subect-cards.component.css']
})
export class SubectCardsComponent{
  @Input() subject_card: SubectCardService[] = [];
  title:string = "ყველაზე მოთხოვნადი სკოლის საგნები";


  
}
