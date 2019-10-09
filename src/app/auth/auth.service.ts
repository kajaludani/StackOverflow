import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
// import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { User } from './user.model';
// import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class AuthService {
  
  private userUrl: string;
  private currentUser?: User;

  public loggedIn:Boolean = false;
  @Output() isLoggedInTest: EventEmitter<any> = new EventEmitter();
  
  constructor(private http:HttpClient,private router: Router,
    private snackBar: MatSnackBar,) 
    {}


  getUserDetails(email, password, userName ) {
    
    const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : 'my-auth-token'
    })
  };

    const postData = {
        email:email,
        password:password,
        userName: userName,
        
    };

      return this.http.post(`http://localhost:3000/users`, postData)
      
  }

getDetails(){
  const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.get(`http://localhost:3000/users`,{ headers: Headers });
}

onSubmit (){ 
  const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.get('http://localhost:3000/users',{ headers: Headers })   

}
// loginAndSaveUser({token, user}) {
//       this.currentUser = this.createUserInstance(user);
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(this.currentUser));
//       this.router.navigateByUrl('/');
    }
    // signin(user: User) {
        //   const body = JSON.stringify(user);
        //   const headers = new Headers({ 'Content-Type' : 'application/json' });
        //   return this.http.post(`http://localhost:3000/users`,{ headers:Headers })
        //     .map((response: Response) => {
        //       const authJson = response.json();
        //       this.loginAndSaveUser(authJson);
        //       return authJson;
        //     })
        //     .catch((error: Response) => {
        //       console.error(error);
        //       return Observable.throw(error.json());
        //     });
        // }
        // isLoggedIn() {
        //       return Boolean(localStorage.getItem('token'));
        //     }

        //     logout() {
        //           localStorage.clear();
        //           this.currentUser = null;
        //           this.router.navigateByUrl('/signin');
        //         }
        //         showError(_message) {
        //               const message = _message || 'There was an error. Please, try again.';
        //               this.snackBar.open(message, 'X', { duration: 2500 });
        //             }
                  
                    // public createUserInstance = (user: User) => {
                    //   return new User(
                    //     user.email,
                    //     null, // Password
                    //     user._id,
                    //     user.userName,
                    //   );
                    // }
        //             public handleError = (error: any) => {
        //                   const { error: { name }, message } = error;
                      
        //                   if (name === 'TokenExpiredError') {
        //                     this.showError('Your session has expired.');
        //                   } else if (name === 'JsonWebTokenError') {
        //                     this.showError('There was a problem with your session.');
        //                   } else {
        //                     this.showError(message);
        //                   }
                      
        //                   this.logout();
        //                 }
       

