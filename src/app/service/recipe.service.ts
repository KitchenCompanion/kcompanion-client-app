import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InputRecipe, InputResponse } from '../models/recipe.models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  postRecipe(data: InputRecipe): Observable<InputResponse>{ //<> is a generic data type. it returns a collection of all data in SignupResponse in this case
    const headers = new HttpHeaders().set('Authorization', "Token ${LocalStorageUtility.readToken()}");
    return this.http.post<InputResponse>(`${this.baseUrl}/recipe/`, data, {headers}); //the baseurl for your backend signup section
  }
}
