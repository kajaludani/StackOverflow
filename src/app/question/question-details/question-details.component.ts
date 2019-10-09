import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  question: any;
  answer: String;
  comment: any;
  test: String;
  flag: Boolean = false;

  constructor(private router:Router,private QService:QuestionService, 
    private activatedRoute: ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      this.QService.getQuestion(id).subscribe(data => {
        this.question = data;
      })
    });
  }

  clickTag(){
    this.router.navigate(['/tags'])
  }

  saveAnswer(){
    if(this.auth.loggedIn)
    {
      let dataToBeUpdated = this.question;
         dataToBeUpdated.answers.push({body: this.answer, comments: []});
        console.log(dataToBeUpdated);
        this.QService.updateQuestion(dataToBeUpdated).subscribe(data => {
          console.log(data);
          this.answer = '';
        });
    }
    else{
      alert('plz login to answer');
      this.router.navigate(['/signin']);

    }
  }

  saveComment(index){
    console.log('clicked');
      if (this.test) {
        this.question.answers[index].comments.pop();
        this.question.answers[index].comments.push({body: this.test});
        console.log(this.question);
        this.QService.updateQuestion(this.question).subscribe(data => {
          this.test = '';
          this.flag = false;
          console.log(data);
        });
      }
  }

  addComment(idx) {
    this.flag = true;
    this.question.answers[idx].comments.push({body: ''});
  }


  remove(id){
    this.router.navigate(['/list'])
    this.QService.deleteQuestion(id).subscribe(data => {
      console.log(data);
    })
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
  // remove(id) {
  //   this.QService.deleteAnswer(id).subscribe(data => {
  //     console.log(data);
  //   })
  // }
}
