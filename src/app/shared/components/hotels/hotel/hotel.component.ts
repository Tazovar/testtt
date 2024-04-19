import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {

  constructor(
    private router: Router
  ){}

  @Input() hotel:any 

  onShowMoreBtnClick(hotelId: number){
   this.router.navigate(['/hotelDetail', hotelId])
  }

}
