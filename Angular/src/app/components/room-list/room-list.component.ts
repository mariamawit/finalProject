import {Component, OnInit} from '@angular/core';
import {RoomService} from '../../services/room/room.service';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../../models/Room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  roomType: string;

  constructor(private roomService: RoomService, private route: ActivatedRoute) {
    // this.rooms = roomService.getAllRooms();
    // TODO:

    roomService.getAllRooms().subscribe(rooms => {
      console.log(rooms.json());
       this.rooms = rooms.json().userData;
      route.queryParamMap.subscribe(params => {
        this.roomType = params.get('roomType');
        if (this.roomType && this.roomType.trim() === 'ALL') {
          this.filteredRooms = this.rooms;
        } else {
          this.filteredRooms = (this.roomType) ?
            this.rooms.filter(room => room.roomType.trim() === this.roomType.trim()) :
            this.rooms;
        }
      });
    });

    // route.queryParamMap.subscribe(params => {
    //   this.roomType = params.get('roomType');
    //   console.log(this.roomType);
    //   if (this.roomType && this.roomType.trim() === 'ALL') {
    //     this.filteredRooms = this.rooms;
    //   } else {
    //     this.filteredRooms = (this.roomType) ?
    //       this.rooms.filter(room => room.roomType.trim() === this.roomType.trim()) :
    //       this.rooms;
    //   }
    // });
  }

  ngOnInit() {
  }

  book(room: Room) {
  }

}
