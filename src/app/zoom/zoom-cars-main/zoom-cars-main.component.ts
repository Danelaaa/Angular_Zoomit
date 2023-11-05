import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom-cars-main',
  templateUrl: './zoom-cars-main.component.html',
  styleUrls: ['./zoom-cars-main.component.css']
})
export class ZoomCarsMainComponent {

    title:string = "აირჩიეთ თქვენთვის სასურველი ZOOM ჩართვა";
    main_title_img:string  = "../../../assets/icons8-zoom-48.png"
  main_card= [
    {
      proffesions: "ფსიქოლოგი" , 
      img:"../../../assets/teacher.svg",
    },
    {
      proffesions: "ქოუჩი" , 
      img:"../../../assets/teacher.svg",
    },
    {
      proffesions: "იურისტი" , 
      img:"../../../assets/teacher.svg",
    },
    {
      proffesions: "უცხო ენა" , 
      img:"../../../assets/teacher.svg",
    },
    {
      proffesions: "ბუღალტერი" , 
      img:"../../../assets/teacher.svg",
    },
    {
      proffesions: "მასწავლებელი" , 
      img:"../../../assets/teacher.svg",
    },
  ]
}
