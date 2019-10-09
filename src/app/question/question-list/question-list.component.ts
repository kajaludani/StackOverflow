import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: any;
  tags: Object;

  constructor(private router: Router, private QService:QuestionService, private auth:AuthService,
    private service:QuestionService) { 

  }
  ngOnInit() {
    this.QService.getQuestions().subscribe((data) => {
      this.questions = data;  
      
    });

  }
  hey(id){
    this.router.navigate(['/details'], {queryParams: {id: id}});
  }

  clickTag(){
    this.router.navigate(['/tags'])
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

  remove(id) {
    this.QService.deleteQuestion(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    })
  }
}
