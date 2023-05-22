import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcUserRoutingModule } from './kc-user-routing.module';
import { KcUserComponent } from './kc-user.component';


@NgModule({
  declarations: [
    KcUserComponent
  ],
  imports: [
    CommonModule,
    KcUserRoutingModule
  ]
})
export class KcUserModule { }
