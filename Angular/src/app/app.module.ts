import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import { HomeComponent } from './components/home/home.component';
import { UserBookingHistoryComponent } from './components/user-booking-history/user-booking-history.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { BookingSuccessComponent } from './components/booking-success/booking-success.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {AuthService} from './services/auth/auth.service';
import { RoomListComponent } from './components/room-list/room-list.component';
import {AuthGuardService} from './services/auth_guard/auth-guard.service';
import { AdminRoomListComponent } from './components/admin/admin-room-list/admin-room-list.component';
import {RoomService} from './services/room/room.service';
import { AddRoomComponent } from './components/admin/add-room/add-room.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomFormsModule} from 'ng2-validation';
import {Http, HttpModule} from '@angular/http';
import {ReservationService} from './services/reservation/reservation.service';
import { SignupComponent } from './components/signup/signup.component';

const appRout: Routes = [
  {path: '', component: RoomListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path: 'booking-success', component: BookingSuccessComponent},
  {path: 'rooms/:roomId', component: RoomDetailsComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'profile/:userId', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: 'rooms', component: RoomListComponent},
  {path: 'admin/add-room', component: AddRoomComponent},
  {path: 'admin/rooms', component: AdminRoomListComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    UserBookingHistoryComponent,
    CheckOutComponent,
    BookingSuccessComponent,
    RoomDetailsComponent,
    NotFoundComponent,
    UserProfileComponent,
    RoomListComponent,
    AdminRoomListComponent,
    AddRoomComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRout),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuardService, AuthService, RoomService, ReservationService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
