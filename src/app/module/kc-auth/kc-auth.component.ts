import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kc-auth',
  templateUrl: './kc-auth.component.html',
  styleUrls: ['./kc-auth.component.scss']
})
export class KcAuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
goToLogin(){
this.router.navigate(['auth/signin'])
}
goToSignup(){
  this.router.navigate(['auth/signup'])
  }
}
