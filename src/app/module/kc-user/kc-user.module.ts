import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KcUserRoutingModule } from './kc-user-routing.module';
import { KcUserComponent } from './kc-user.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { KcSharedModule } from '../kc-shared/kc-shared.module';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecipeComponent } from './components/recipe/recipe.component';


@NgModule({
  declarations: [
    KcUserComponent,
    RecipeDetailsComponent,
    CreateRecipeComponent,
    CategoriesComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    KcUserRoutingModule,
    KcSharedModule
  ]
})
export class KcUserModule { }
