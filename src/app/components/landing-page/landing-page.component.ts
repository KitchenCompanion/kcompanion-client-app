import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  
  goToLogin() {
    this.router.navigate(['auth/signin'])
    }

}
