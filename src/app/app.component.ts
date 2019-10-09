import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QueryStack';
  flag: Boolean = false;
  constructor(private authService: AuthService, private router:Router) {

    authService.isLoggedInTest.subscribe(x => {
      if (x === 'success') {
        this.authService.loggedIn = true;
        this.flag = this.authService.loggedIn;
      }
    });
    
  }

  logout() {
    this.authService.loggedIn = false;
    this.flag = this.authService.loggedIn;
     this.router.navigate(['/signin']);

    }
 }
