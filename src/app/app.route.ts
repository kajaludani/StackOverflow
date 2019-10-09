import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { QuestionScreenComponent } from './question/question-screen/question-screen.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { QuestionDetailsComponent } from './question/question-details/question-details.component';
import { TagsComponent } from './tags/tags.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
// import { QUESTION_ROUTES } from './question/question.routes';
// import { QuestionListComponent } from './question/question-list/question-list.component';
// import { QUESTION_ROUTES } from './question/question.routes';

const ROUTES: Routes = [
  { path: '', component: QuestionListComponent, pathMatch: 'full' },
 
  // { 
  //   path: 'list', component: QuestionListComponent ,
  // },
  { path:'details', component: QuestionDetailsComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new', component: QuestionFormComponent},
  { path: 'tags', component: TagsComponent},


  // { path: 'question', children: QUESTION_ROUTES },
];

export const Routing = RouterModule.forRoot(ROUTES);

