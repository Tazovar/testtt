import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  serverUrl: string = "https://hotelbooking.stepprojects.ge/api"
  constructor(private http:HttpClient) { }
bookedDeleteEmitter:EventEmitter<any> = new EventEmitter();

  getBooked():Observable<any>{
return this.http.get(`${this.serverUrl}/Booking`)
  }

  deleteBooked(id:number):Observable<any>{
    return this.http.delete(`${this.serverUrl}/Booking/${id}`)
    .pipe(
      catchError(this.catchDeleteErrors())
    )

  }

  catchDeleteErrors() {
    return (error: HttpErrorResponse) => {
      if (error.status === 200) {
        alert("deleted successful");
        this.bookedDeleteEmitter.emit()
      }else{
        alert('something wrong')
      }
      return throwError(error);
    };
  }
}
