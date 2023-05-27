import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InputRecipe } from 'src/app/models/recipe.models';
import { RecipeService } from 'src/app/service/recipe.service';
import { localStorageUtils } from 'src/app/utils/localstorage.utils';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

  // categories: Category[];
  // category!: Category;

  id_number!: number
  
  formGroup!: FormGroup
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private recipeService: RecipeService) 
    { 
      // this.categories = [
      //   {name: 'breakfast', value: 'Breakfast'},
      //   {name: 'lunch', value: 'Lunch'},
      //   {name: 'dinner', value: 'Dinner'},
      //   {name: 'dessert', value: 'Dessert'},
      //   {name: 'appetizer', value: 'Appetizer'},
      // ];
    }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: new FormControl(''),
      ingredients: new FormControl(''),
      steps: new FormControl(''),
      category: new FormControl(''),
      level: new FormControl(''),
      prep_time: new FormControl(''),
      rating: new FormControl(''),
      author: new FormControl(''),
    })
  }

  addRecipe(){
    const formData: InputRecipe = {
      title: this.formGroup.get(["title"])?.value,
      ingredients: this.formGroup.get(["ingredients"])?.value,
      steps: this.formGroup.get(["steps"])?.value,
      category: this.formGroup.get(["category"])?.value,
      level: this.formGroup.get(["level"])?.value,
      prep_time: parseInt(this.formGroup.get(["prep_time"])?.value),
      rating: parseInt(this.formGroup.get(["rating"])?.value),
      author: localStorageUtils.readId(),
    }

    console.log(formData)

    this.recipeService.postRecipe(formData).subscribe({
      next: response => {
        alert('Success')
      },

      error: err => {
        alert("Error")
      }
    })

  }

}

