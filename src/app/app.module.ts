import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModules} from 'src/app/material.modules';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.route';
import { AuthService } from './auth/auth.service';
import { QuestionScreenComponent } from './question/question-screen/question-screen.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionService } from './question/question.service';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { TagsComponent } from './tags/tags.component';
import {QuestionDetailsComponent} from 'src/app/question/question-details/question-details.component'
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    QuestionScreenComponent,
    QuestionListComponent,
    QuestionFormComponent,
    TagsComponent,
    QuestionDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModules,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Routing,
    
  ],
  providers: [AuthService,QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
