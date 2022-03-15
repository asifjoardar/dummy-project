import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testMaterial';
  constructor(private signin: MatDialog){

  }
  openSignInDialog() {
    this.signin.open(SigninComponent, {
      width: '40%'
    });
  }
  openSignUpDialog() {
    this.signin.open(SignupComponent, {
      width: '40%'
    });
  }
}
