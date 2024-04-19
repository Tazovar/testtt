import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/pages/main/main.component';
import { HotelDetailsComponent } from './views/pages/hotel-details/hotel-details.component';
import { RoomsComponent } from './views/pages/rooms/rooms.component';
import { RoomDetailComponent } from './views/pages/room-detail/room-detail.component';
import { HotelComponent } from './shared/components/hotels/hotel/hotel.component';
import { HotelsComponent } from './views/pages/hotels/hotels.component';
import { BookedsComponent } from './views/pages/bookeds/bookeds.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'hotels', component: HotelsComponent},
  {path:'hotelDetail/:id', component: HotelDetailsComponent},
  {path:'rooms', component: RoomsComponent},
  {path:'roomDetail/:id', component: RoomDetailComponent},
  {path:'booked', component:BookedsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
