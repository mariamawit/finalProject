import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route, state: RouterStateSnapshot) {
    // if (this.authService) {
    //   return true;
    // }
    //
    // this.router.navigate(['/login']);
    //
    // return false;

    return this.authService.user$.map(user => {
      if (user) {
        return true;
      }
      this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
      return false;
    });
  }
}
