import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcUserRoutingModule } from './kc-user-routing.module';
import { KcUserComponent } from './kc-user.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { KcSharedModule } from '../kc-shared/kc-shared.module';


@NgModule({
  declarations: [
    KcUserComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    KcUserRoutingModule,
    KcSharedModule
  ]
})
export class KcUserModule { }
