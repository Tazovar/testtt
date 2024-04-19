import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.css'
})
export class BookedComponent {
@Input() room:any;
@Output() idEmitter:EventEmitter<number> = new EventEmitter()

deleteBooking(){
this.idEmitter.emit(this.room.id)
}
}
