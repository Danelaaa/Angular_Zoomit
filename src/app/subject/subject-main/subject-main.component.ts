import { Component } from '@angular/core';
import { SubectCardService } from '../subect-card.service';

@Component({
  selector: 'app-subject-main',
  templateUrl: './subject-main.component.html',
  styleUrls: ['./subject-main.component.css']
})
export class SubjectMainComponent {
  title:string = "ყველაზე მოთხოვნადი სკოლის საგნები";

  subject_card: SubectCardService[] = [
    {
      subject: "ფსიქოლოგი",
      class: "V-XII კლასი",
      time_from: 45,
      time_to: 90,
      price_low: 16.00,
      price_max: 25.00,
      img: "../../../assets/pg-35-napoleon-1-dea-getty.webp",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "ფსიქოლოგი",
      class: "V-XII კლასი",
      time_from: 45,
      time_to: 90,
      price_low: 16.00,
      price_max: 25.00,
      img: "../../../assets/pg-35-napoleon-1-dea-getty.webp",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "ფსიქოლოგი",
      class: "V-XII კლასი",
      time_from: 45,
      time_to: 90,
      price_low: 16.00,
      price_max: 25.00,
      img: "../../../assets/pg-35-napoleon-1-dea-getty.webp",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "ფსიქოლოგი",
      class: "V-XII კლასი",
      time_from: 45,
      time_to: 90,
      price_low: 16.00,
      price_max: 25.00,
      img: "../../../assets/pg-35-napoleon-1-dea-getty.webp",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "ფსიქოლოგი",
      class: "V-XII კლასი",
      time_from: 45,
      time_to: 90,
      price_low: 16.00,
      price_max: 25.00,
      img: "../../../assets/pg-35-napoleon-1-dea-getty.webp",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
  ];
  
}
