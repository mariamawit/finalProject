import { Injectable } from '@angular/core';
import {Room} from '../../models/Room';
import {Http} from '@angular/http';

@Injectable()
export class RoomService {

  private  baseUrl = 'http://localhost:5000'; // Url for back end.
  private addNewRoomUrl = this.baseUrl + '/add-room';

  rooms: Room[];
  constructor(private http: Http) {
    this.rooms = [
      {
        _id: '',
        roomType: 'ONE_BED_ROOM',
        price: 100,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/UMass_Hotel_room.JPG'
      },
      {
        _id: '',
        roomType: 'ONE_BED_ROOM',
        price: 70,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Ibis_Hotels_Dresden_Single_Room_Standard_Queen_Size_Bed.png'
      },
      {
        _id: '',
        roomType: 'TWO_BED_ROOM',
        price: 130,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Hotel_Du_Louvre_Paris_Room_377.jpg'
      },
      {
        _id: '',
        roomType: 'THREE_BED_ROOM',
        price: 170,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Triple_room_three_beds_1_-_Paris_Opera_Cadet_Hotel.jpg'
      },
      {
        _id: '',
        roomType: 'TWO_BED_ROOM',
        price: 130,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Hotel_Du_Louvre_Paris_Room_377.jpg'
      },
      {
        _id: '',
        roomType: 'TWO_BED_ROOM',
        price: 130,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Hotel_Du_Louvre_Paris_Room_377.jpg'
      }
    ];
  }


  getAllRooms() {
    // return this.rooms;
     return this.http.get(this.baseUrl + '/getrooms'); // This will return an observable.
  }

  addNewRoom(room: Room) {
    // TODO: call the back end post method.
     // this.rooms.unshift(room);
     return this.http.post(this.addNewRoomUrl , {data: JSON.stringify(room)});
  }

  getRoomById(roomId: string) {
    return this.http.get(this.baseUrl + '/getoneroom/' + roomId);
  }

}
