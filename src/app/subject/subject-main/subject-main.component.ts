import { Component, OnInit } from '@angular/core';
import { SubectCardService } from '../subect-card.service';
import { DataService } from '../htpp-service.service';
@Component({
  selector: 'app-subject-main',
  templateUrl: './subject-main.component.html',
  styleUrls: ['./subject-main.component.css']
})
export class SubjectMainComponent implements OnInit{
  title:string = "ყველაზე მოთხოვნადი სკოლის საგნები";

  subject_card: SubectCardService[] = [];
  selectedLocationId: number = 0;

 
  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.getLocations().subscribe((dataService: any) => {
      this.subject_card = dataService;
      for (const card of dataService) {
        console.log(card.id);
      }
      
    });
   
  }
  


  }




