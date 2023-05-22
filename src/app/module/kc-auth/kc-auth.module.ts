import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcAuthRoutingModule } from './kc-auth-routing.module';
import { KcAuthComponent } from './kc-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    KcAuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    KcAuthRoutingModule
  ]
})
export class KcAuthModule { }
