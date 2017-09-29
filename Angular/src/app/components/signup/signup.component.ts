import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  singup() {
    const userModel = new UserModel(this.myForm.value.email, this.myForm.value.password,
      this.myForm.value.firstName, this.myForm.value.lastName);
    this.authService.signup(userModel).subscribe();
    this.myForm.reset();
  }

}
