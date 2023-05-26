import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { KcUserComponent } from './kc-user.component';

const routes: Routes = [{ path: '', component: KcUserComponent,
children:[
  {path: '', component: RecipeComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'create-recipe', component: CreateRecipeComponent},
  {path: 'recipe/:id', component: RecipeDetailsComponent},


] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KcUserRoutingModule { }
