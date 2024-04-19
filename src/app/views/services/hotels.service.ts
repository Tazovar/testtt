import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  serverUrl: string = "https://hotelbooking.stepprojects.ge/api"


  constructor(
    private http: HttpClient
  ) { 

  }

  getHotels(): Observable<any>{
    return this.http.get(`${this.serverUrl}/Hotels/GetAll`)
  }

  getHotelById(hotelId: number): Observable<any>{
    return this.http.get(`${this.serverUrl}/Hotels/GetHotel/${hotelId}`)
  }
  getCities(): Observable<any>{
    return this.http.get(`${this.serverUrl}/Hotels/GetCities`)
  }
}
