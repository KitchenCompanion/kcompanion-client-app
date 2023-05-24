import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  goToLogin() {
    throw new Error('Method not implemented.');
  }
  goToSignup() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToSignin() {
    this.router.navigate(['auth/signin'])
  }
}
