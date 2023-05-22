import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KcAuthComponent } from './kc-auth.component';

const routes: Routes = [{ path: '', component: KcAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KcAuthRoutingModule { }
