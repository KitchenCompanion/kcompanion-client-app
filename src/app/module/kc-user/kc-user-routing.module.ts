import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import { RecipeComponent } from './components/recipe/recipe.component';


import { KcUserComponent } from './kc-user.component';

const routes: Routes = [
  { path: '', component: KcUserComponent,
children:[
  {path: "", component: RecipeComponent},
  {path: "recipe", component: RecipeComponent},
  {path: 'recipe-details', component: RecipeDetailsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KcUserRoutingModule { }
