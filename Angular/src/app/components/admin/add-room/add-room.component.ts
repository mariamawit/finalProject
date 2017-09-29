import { Component, OnInit } from '@angular/core';
import {Room} from '../../../models/Room';
import {RoomService} from '../../../services/room/room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room: Room = {_id: '', imageUrl: '', roomType: '', price: 0};

  constructor(private roomService: RoomService, private router: Router) {
  }

  ngOnInit() {
  }

  addNewRoom() {
    console.log('Add new Room button is working');
    // TODO: I have to call the roomService to post the data which is 'room'.
     this.roomService.addNewRoom(this.room).subscribe(res => {
       console.log(res);
     });
    // this.router.navigate(['/admin/rooms']);
  }

}
