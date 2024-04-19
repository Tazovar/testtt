import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from '../../services/booking.service';
import { RoomsService } from '../../services/rooms.service';
import { get } from 'mongoose';

@Component({
  selector: 'app-bookeds',
  templateUrl: './bookeds.component.html',
  styleUrl: './bookeds.component.css'
})
export class BookedsComponent implements OnInit {
data:Array<any> = []

gett(){
  this.bookingService.getBooked()
  .subscribe((res)=> {
   this.data = res
  })

}
constructor(private bookingService:BookingService,private roomService:RoomsService){}
ngOnInit(): void {


  this.bookingService.bookedDeleteEmitter.subscribe(() => {
    this.data = []
this.gett();
  })
this.gett()
   this.roomService.okStatusEmitted.subscribe((res)=> {
this.data.push(res)     
   })
}


idEmitterSub(id:number){
  this.bookingService.deleteBooked(id)
  .subscribe((res:any)=>{
  })
}
}
