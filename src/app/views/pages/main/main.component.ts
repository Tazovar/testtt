import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  roomData$!: Observable<any>

  constructor(
    private http: HttpClient, 
    private roomsService: RoomsService
  ){}

  ngOnInit(): void {
    this.roomData$ = this.roomsService.getRooms()
  }

}
