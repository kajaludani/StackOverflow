import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders,HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
// import { throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Reactive forms
  signupForm: FormGroup;
  users:any;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required)
    });
  }

  oncheck(){
    this.auth.getUserDetails(
      this.signupForm.get('email').value,
      this.signupForm.get('password').value,
      this.signupForm.get('userName').value,
  
      ).subscribe((data)=>{
       alert("Registration Sucessful !!");
      this.router.navigate(['/signin']);
  
     }
     //, error => {
    //   this.handleError(error); //handling error
  
    //  }
    );
  
  }
  onSignUp(){
    this.auth.getDetails().subscribe((data: any[]) => {
  
            if(data.length == 0) {
              this.oncheck();
            }
            else {
            
              for(var i = 0; i < data.length; i++) {
              var obj = data[i];
              
              if (obj.email !==  this.signupForm.get('email').value ) {
                this.oncheck();
                  break;
              } 
            else {
                alert('email already exists');
                  break;
              }
            }
          }
       })
    };
  
  
  // public handleError(errorResponse: HttpErrorResponse) {
  //       // client side or server error
  //   if (errorResponse.error instanceof ErrorEvent) {
  //       // console.error("client side error",errorResponse.error.message);
  //     alert('client side error,please try again');
  //   } else {
  //       // console.error("Server side error",errorResponse);
  //     alert('server side error,please try again');
  //   }
  //   return throwError('there is problem with service');
  // }
  
  }
  