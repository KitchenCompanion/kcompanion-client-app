import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcAuthRoutingModule } from './kc-auth-routing.module';
import { KcAuthComponent } from './kc-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KcAuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    KcAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class KcAuthModule { }
