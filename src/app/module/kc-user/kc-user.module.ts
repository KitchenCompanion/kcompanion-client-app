import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcUserRoutingModule } from './kc-user-routing.module';
import { KcUserComponent } from './kc-user.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    KcUserComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    KcUserRoutingModule
  ]
})
export class KcUserModule { }
