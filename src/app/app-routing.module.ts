import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./module/kc-auth/kc-auth.module').then(m => m.KcAuthModule) },
  { path: 'user', loadChildren: () => import('./module/kc-user/kc-user.module').then(m => m.KcUserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
