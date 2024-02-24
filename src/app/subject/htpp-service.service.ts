import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService  {

  private jsonServerUrl = 'http://localhost:3000'; // Adjust the URL accordingly

  constructor(private httpClient: HttpClient) {}

  getLocations() {
    return this.httpClient.get(`${this.jsonServerUrl}/locations`);
  }

  
}
