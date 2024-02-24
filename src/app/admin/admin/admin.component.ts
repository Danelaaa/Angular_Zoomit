import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubectCardService } from 'src/app/subject/subect-card.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  private jsonServerUrl = 'http://localhost:3000';
  constructor(private http:HttpClient){
  }
  ngOnInit(): void {
  
  }
  onChangeFile(){
    
  }

  onProductCreate(products:{subject:string,class:string,time_from:number,time_to:number,price_low:number,price_max:number,img:string,name:string,raiting:string}){
    this.http.post(`${this.jsonServerUrl}/locations`,products).subscribe((res) =>{
      console.log(res);
      
    });

  }

  
 



  }
  
  


  
