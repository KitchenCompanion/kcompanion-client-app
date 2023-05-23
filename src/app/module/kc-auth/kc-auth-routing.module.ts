import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { KcAuthComponent } from './kc-auth.component';

const routes: Routes = [{ path: '', component: KcAuthComponent, 
  children: [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KcAuthRoutingModule { }
