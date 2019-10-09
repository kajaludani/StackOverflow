import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit {
  constructor(private service:QuestionService, private auth:AuthService, private router:Router ) {   
  }
  ngOnInit() {
  }

  askQuestion(){
    if(this.auth.loggedIn){
      this.router.navigate(['/new']);
    }
    else{
      alert('please Login to Ask Questyion');
      this.router.navigate(['/signin'])
    }
  }
}

