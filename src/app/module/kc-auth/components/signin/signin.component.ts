import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { localStorageUtils } from 'src/app/utils/localstorage.utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  goToLogin() {
    throw new Error('Method not implemented.');
  }

  // The FormBuilder module is used to build a form
  formGroup!: FormGroup //Normally the formGroup was supposed to be assigned a value. ! tells the fucntion tha tthe value will be passed afterwards. bypasses the error
  message!: string
  success!: string


  constructor(
    private router: Router,
    private fbuilder:FormBuilder,
    private authService: AuthService, ) { }

  ngOnInit(): void {
    this.formGroup = this.fbuilder.group({
      email: new FormControl(''), //FormControl creates a form field for username
      password: new FormControl(''),
    })
  }
  goToSignup() {
    this.router.navigate(['auth/signup'])
  }

  logIn(){
    const formData:UserLogin = {
      email: this.formGroup.get(["email"])?.value, //? indicates a possibility of the variable being undefined (not defined)
      password: this.formGroup.get(["password"])?.value
    }
    console.log(formData)

    this.authService.login(formData).subscribe({ //subscribe retuns a promise (either positive or -ve)
      next: response => { //a positive promise is signified by next
        //Define what happens when the promise returns +ve
        localStorageUtils.writeToken(response.token)
        localStorageUtils.writeId(response.user_id)

        console.log(response)
        this.success = response.token
        this.router.navigate(["/user/"])
      },
      error: err =>{
        this.message = err
      }
    })

  }

}
