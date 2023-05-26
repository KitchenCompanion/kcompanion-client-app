import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserLogin, UserSignup } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { localStorageUtils } from 'src/app/utils/localstorage.utils';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // goToLogin() {
  //   throw new Error('Method not implemented.');
  // }
  // goToSignup() {
  //   throw new Error('Method not implemented.');
  // }

  formGroup!: FormGroup

  constructor(
    private router: Router,
    private fbuilder:FormBuilder,
    private authService: AuthService, ) { }

  ngOnInit(): void {
    this.formGroup = this.fbuilder.group({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
    })
  }

  register(){
    const formData:UserSignup = {
      username: this.formGroup.get(["username"])?.value,
      email: this.formGroup.get(["email"])?.value,
      password: this.formGroup.get(["password"])?.value,
      confirm_password: this.formGroup.get(["confirm_password"])?.value
    }

    console.log(formData)

    this.authService.register(formData).subscribe({ 
      next: response => { 
        localStorageUtils.writeToken(response.email)
        localStorageUtils.writeToken(response.username)
        alert("Success")
      },
      error: err =>{
        alert("Error: Couldn't register")
      }
    })

  }


  goToSignin() {
    this.router.navigate(['auth/signin'])
  }
}
