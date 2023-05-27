import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageUtils } from 'src/app/utils/localstorage.utils';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  userLogOut(){
    localStorageUtils.deleteToken()
    this.router.navigate([""])
  }

  createRecipe(){
    this.router.navigate(["/user/create-recipe"])
  }
}
