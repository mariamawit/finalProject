import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '../../services/room/room.service';
import {Reservation} from '../../models/Reservation';
import {ReservationService} from '../../services/reservation/reservation.service';
import {AuthService} from '../../services/auth/auth.service';
import {Room} from '../../models/Room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  user;
  room: Room = {_id: '', roomType: '', imageUrl: '', price: null};
  checkIn;
  checkOut;

  constructor(private route: ActivatedRoute, private roomService: RoomService,
              private reservationService: ReservationService, private authService: AuthService) { }



  reserveRoom() {

    this.authService.user$.subscribe(user => {
      this.user = user;
    });
    if (this.room && this.user) {
      const reservation: Reservation = {
        userId: this.user.uid,
        roomId: this.room._id,
        checkOut: this.checkOut,
        checkIn: this.checkIn
      };
      this.reservationService.reserveRoom(reservation);
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const roomId = params.get('roomId');
      console.log('roomId: ' + roomId);
      // TODO: call the service to get the object.
        this.roomService.getRoomById(roomId).subscribe(resp => {
        this.room = resp.json().userData[0];
        console.log(resp);
        console.log(resp.json().userData[0]);
      }); // This should return an observable.
    });
  }

}
