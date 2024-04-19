import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../../services/rooms.service';
import { Observable } from 'rxjs';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  data: any;
  allRoom$!: Observable<any>;
  bookingSuccess: boolean = false;
  bookingError: string | null = null;
  bookingData: any = {
    checkInDate: '',
    checkOutDate: '',
    customerName: '',
    customerPhone: ''
  };
  bookedDates: any[] = []; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService: RoomsService,
    private bookingService: BookingService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      let id = res["id"];
      this.roomService.getRoomById(id).subscribe((result: any) => {
        this.data = result;
        this.bookedDates = result.bookedDates.map((booking: any) => new Date(booking.date)); 
      });
    });
    
    this.allRoom$ = this.roomService.getRooms();
    setTimeout(() => {
      console.log(this.bookedDates);
    }, 200);


    
  }



  bookRoom(): void {
    const bookingPayload = {
      roomId: this.data.id,
      checkInDate: this.bookingData.checkInDate,
      checkOutDate: this.bookingData.checkOutDate,
      customerName: this.bookingData.customerName,
      customerPhone: this.bookingData.customerPhone,
      isConfirmed: true
    };
    

    this.roomService.bookedRoom(bookingPayload).subscribe(
      (response: any) => {    
        console.log("res",response);
        this.roomService.okStatusEmitted.emit(bookingPayload);

      },
      (error: any) => {
      }
    );
    
  }

 
}
