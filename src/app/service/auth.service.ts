import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse, SignupResponse, UserLogin, UserSignup } from '../models/user.model';
import { localStorageUtils } from '../utils/localstorage.utils';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  register (data: UserSignup): Observable<SignupResponse>{ //<> is a generic data type. it returns a collection of all data in SignupResponse in this case
    return this.http.post<SignupResponse>(`${this.baseUrl}/signup/`, data); //the baseurl for your backend signup section
  }

  login (data: UserLogin): Observable<LoginResponse>{ //<> is a generic data type. it returns a collection of all data in SignupResponse in this case
    return this.http.post<LoginResponse>(`${this.baseUrl}/login/`, data); //the baseurl for your backend signup section
  }

  logout () {
    localStorageUtils.deleteToken();
  }
}
