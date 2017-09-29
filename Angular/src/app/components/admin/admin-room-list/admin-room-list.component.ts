import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../../services/room/room.service';

@Component({
  selector: 'app-admin-room-list',
  templateUrl: './admin-room-list.component.html',
  styleUrls: ['./admin-room-list.component.css']
})
export class AdminRoomListComponent implements OnInit {

  rooms$; // This should be Observable.
  constructor(private roomService: RoomService) {
    this.rooms$ = roomService.getAllRooms(); // It has to return an observable.
  }

  ngOnInit() {
  }

}
