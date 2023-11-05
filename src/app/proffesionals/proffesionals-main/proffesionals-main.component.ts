import { Component } from '@angular/core';
import { proffesionals_card } from '../proffesionals-card.service';

@Component({
  selector: 'app-proffesionals-main',
  templateUrl: './proffesionals-main.component.html',
  styleUrls: ['./proffesionals-main.component.css']
})
export class ProffesionalsMainComponent {
  title:string ="დაუკავშიდით პროფესიონალებს";
  proffesionals_card:proffesionals_card[] = [
    {
      subject: "ფსიქოლოგი",
      img: "../../../assets/napoleon-exile-gettyimages-1288489073.jpg",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "დაწყებითი",
      img: "../../../assets/napoleon-exile-gettyimages-1288489073.jpg",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "ბუღალტერია",
      img: "../../../assets/napoleon-exile-gettyimages-1288489073.jpg",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },
    {
      subject: "ფსიქოლოგი",
      img: "../../../assets/napoleon-exile-gettyimages-1288489073.jpg",
      name: "ნაპოლეონ ბონაპარტი",
      raiting: "0 (0)",
    },

    
  ];
}
