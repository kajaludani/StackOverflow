import { Injectable, EventEmitter, Output } from '@angular/core';
// // import { Answer } from '../answer/answer.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../auth/user.model';
// import { environment } from '../../environments/environment';
// // import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs';


@Injectable()

export class QuestionService {
  private userUrl: string;
  private currentUser?: User;
  
  constructor(private http: HttpClient,) { }



  getQuestions(){
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/questions',{ headers: Headers })     
  }

  getQuestion(id: Number) {
    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/questions/' + id, { headers: Headers })
  }

  getQueDetails(title, body, tag ) {
    
    const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : 'my-auth-token'
    })
  };
  const postData = {
  title:title,
  body:body,
  tag:tag,
  answers: []
};

return this.http.post(`http://localhost:3000/questions`, postData)
  
}

updateQuestion(updatedData) {
    
  const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : 'my-auth-token'
  })
};

return this.http.put(`http://localhost:3000/questions/` + updatedData.id, updatedData)

}
getCommentDetails(comment) {
    
  const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : 'my-auth-token'
  })
};
const postData = {
comment:comment,
};

return this.http.post(`http://localhost:3000/comments`, postData)

}



deleteQuestion(id) {

return this.http.delete(`http://localhost:3000/questions/` + id)

}

deleteAnswer(id) {
  return this.http.delete(`http://localhost:3000/questions` + id)
  }
  // getTags(){
  //   const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  //   return this.http.get('http://localhost:3000/tags',{ headers: Headers })     
  // }
//   handleError(error: any) {
//     const message = error.message ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     return console.log(message);
//   }

//   getQuestion(id): Promise<void | Question> {
//     return this.http.get(`${this.questionUrl}/${id}`)
//       .toPromise()
//       .then(response => response.json() as Question)
//       .catch(this.handleError);
//   }

//   getQuestions(sort): Promise<void | Question[]> {
//     return this.http.get(`${this.questionUrl}?sort=${sort}`)
//       .toPromise()
//       .then(response => response.json() as Question[])
//       .catch(this.handleError);
//   }

//   getToken() {
//     return localStorage.getItem('token');
//   }

//   createQuestion(question: Question) {
//     const body = JSON.stringify(question);
//     const headers = new Headers({ 'Content-Type': 'application/json'});
//     const createQuestionUrl = `${this.questionUrl}?token=${this.getToken()}`;

//     return this.http.post(createQuestionUrl, body, { headers })
//       .map((response: Response) => response.json())
//       .catch((error: Response) => Observable.throw(error.json()));
//   }

//   createAnswer(answer: Answer) {
//     const lightAnswer = {
//       description: answer.description,
//       question: { _id: answer.question._id }
//     };
//     const body = JSON.stringify(lightAnswer);
//     const headers = new Headers({ 'Content-Type': 'application/json'});
//     const createAnswerUrl = `${this.questionUrl}/${answer.question._id}/answers?token=${this.getToken()}`;

//     return this.http.post(createAnswerUrl, body, { headers })
//       .map((response: Response) => response.json())
//       .catch((error: Response) => Observable.throw(error.json()));
//   }
}
