import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  goToLogin() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToSignup() {
    this.router.navigate(['auth/signup'])
  }

}
