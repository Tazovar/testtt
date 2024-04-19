import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent implements OnInit{

data: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelsService,
    private roomsService:RoomsService
  ){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((res:any) => {
        let id = res["id"]
        this.hotelService.getHotelById(id).subscribe((result:any) => {
          this.data = result
          console.log(this.data);
        })
      })
  }

  filterBodyEmiterSubscriber(event:any){
    this.roomsService.filterRoom(event)
    .subscribe((res) => {
      this.data.rooms = res
    })
  }

}
