import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelsService } from '../../services/hotels.service';
import { HttpClient } from '@angular/common/http';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  roomsData$!: Observable<any>

  constructor(
    private http: HttpClient, 
    private roomsService: RoomsService
  ){}

  ngOnInit(): void {
    this.roomsData$ = this.roomsService.getRooms()

      
  }
  filterBodyEmiterSub(event: any){
   this.roomsData$ = this.roomsService.filterRoom(event)

  }

}
