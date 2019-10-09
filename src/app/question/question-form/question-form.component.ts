import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questionForm: FormGroup;
  users:any;

  constructor(private service:QuestionService, private router:Router) { }

  ngOnInit() {
    this.questionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required)
    });
  }
  postQuestion(){
    this.service.getQueDetails(
      this.questionForm.get('title').value,
      this.questionForm.get('body').value,
      this.questionForm.get('tag').value,
  
      ).subscribe((y)=>{
       alert("Question Sucessful !!");
      this.router.navigate(['']);
  
     }
     //, error => {
    //   this.handleError(error); //handling error
  
    //  }
    );
  
  }


//  postQuestion(){
//     console.log('hey')
//   }

}
