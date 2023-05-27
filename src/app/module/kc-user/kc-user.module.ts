import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcUserRoutingModule } from './kc-user-routing.module';
import { KcUserComponent } from './kc-user.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { KcSharedModule } from '../kc-shared/kc-shared.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KcUserComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    CategoriesComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule,
    KcUserRoutingModule,
    KcSharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class KcUserModule { }
