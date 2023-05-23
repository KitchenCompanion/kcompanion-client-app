import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: LandingPageComponent},
  { path: 'auth', loadChildren: () => import('./module/kc-auth/kc-auth.module').then(m => m.KcAuthModule) },
  { path: 'user', loadChildren: () => import('./module/kc-user/kc-user.module').then(m => m.KcUserModule) },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
