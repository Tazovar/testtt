import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
@Output() okStatusEmitted = new EventEmitter();
  
  serverUrl: string = "https://hotelbooking.stepprojects.ge/api"


  constructor(
    private http: HttpClient
  ) { 

  }

  getRooms(): Observable<any>{
    return this.http.get(`${this.serverUrl}/Rooms/GetAll`)
  }

  getFavoriteRooms():Observable<any>{
return this.http.get<any>(`${this.serverUrl}/Rooms/GetAll`)
  }
  getRoomById(roomId: number): Observable<any>{
    return this.http.get(`${this.serverUrl}/Rooms/GetRoom/${roomId}`)
  }
  getAvailableRooms(): Observable<any> {
    return this.http.get(`${this.serverUrl}/Rooms/GetAvailableRooms`)
  }

  filterRoom(filterBody: any): Observable<any>{
    return this.http.post(`${this.serverUrl}/Rooms/GetFiltered`, filterBody)
  }

  bookedRoom(data: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/Booking`, data).pipe(
      catchError(this.catchBookedErrors())
    );
  }

  catchBookedErrors() {
    return (error: HttpErrorResponse) => {
      if (error.status === 400) {
        alert("Room already booked");
      } else if (error.status === 200) {
        alert("Booking successful");
        this.okStatusEmitted.emit();
      }
      return throwError(error);
    };
  }


}
