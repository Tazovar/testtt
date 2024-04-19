import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/pages/main/main.component';
import { HotelDetailsComponent } from './views/pages/hotel-details/hotel-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelComponent } from './shared/components/hotels/hotel/hotel.component';
import { RoomsComponent } from './views/pages/rooms/rooms.component';
import { RoomComponent } from './shared/components/room/room.component';
import { RoomDetailComponent } from './views/pages/room-detail/room-detail.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from './views/components/header/header.component';
import { BannerComponent } from './views/components/banner/banner.component';
import { FooterComponent } from './views/components/footer/footer.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HotelsComponent } from './views/pages/hotels/hotels.component';
import { BookedComponent } from './shared/components/booked/booked.component';
import { BookedsComponent } from './views/pages/bookeds/bookeds.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HotelDetailsComponent,
    HotelComponent,
    RoomsComponent,
    RoomComponent,
    RoomDetailComponent,
    FilterComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HotelsComponent,
    BookedComponent,
    BookedsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLinkActive,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
