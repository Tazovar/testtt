import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
data$!:Observable<any>

constructor(private hotelService:HotelsService){}
  ngOnInit(): void {
    this.data$ = this.hotelService.getHotels()
  }



}
