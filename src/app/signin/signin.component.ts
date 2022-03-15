import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin: FormGroup;
  hide = true;
  ngOnInit(){
    this.signin = new FormGroup({
      'username': new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit(){}
}
