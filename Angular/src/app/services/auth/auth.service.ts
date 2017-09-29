import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {UserModel} from '../../models/user.model';
import {Http} from '@angular/http';
@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private AngAuth: AngularFireAuth, private route: ActivatedRoute,
              private http: Http) {
    /*
    By Using the following observable, the user object will be changed if
    we loged in or logged out.
     */
    this.user$ = this.AngAuth.authState;
  }


  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.AngAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.AngAuth.auth.signOut();
  }

  signup(userModel: UserModel) {
    const body = JSON.stringify(userModel);
      return this.http.post('http://localhost:5000/user', {body});
  }

}
