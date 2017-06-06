import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { InputWraperStateDirective } from './input-wraper-state.directive';
import { PasswordValidatorDirective } from './password-validator.directive';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    InputWraperStateDirective,
    PasswordValidatorDirective,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      component: SignUpComponent
    },{
      path: 'log-in',
      component: LogInComponent
    }])
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
