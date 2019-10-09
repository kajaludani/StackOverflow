import { AuthService } from './../auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  users: any;
  errorMessage: string;

  constructor(private router: Router,private auth: AuthService){}

  ngOnInit () {
    this.signinForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin(){
    this.auth.getDetails().subscribe((data)=>{

      this.users = data;
      this.users.forEach((element) => {
      
        if( (this.signinForm.get('email').value == element.email) && (this.signinForm.get('password').value == element.password) )  {
          alert("Login Succesful");
          this.auth.isLoggedInTest.emit('success');
          this.router.navigate(['']);
        } else {
          alert("Invalid Email/Password");
        }
      })
    
      });
    }
}