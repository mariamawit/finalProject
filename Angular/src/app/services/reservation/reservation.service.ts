import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Reservation} from '../../models/Reservation';

@Injectable()
export class ReservationService {

  private  baseUrl = 'http://localhost:5000'; // Url for back end.

  constructor(private http: Http) { }

  reserveRoom(reservation: Reservation) {
    // TODO: I have to call the back end method.
    this.http.post(this.baseUrl + '/booking', {data: reservation}); // we can send without puttin data.
  }

}
