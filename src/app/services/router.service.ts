import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  homePage() {
    this.router.navigate([""])
  }
  
  loginPage() {
    this.router.navigate(["login"])
  }

  registerPage() {
    this.router.navigate(["register"])
  }

  profilePage(){
    this.router.navigate(['profile'])
  }
}
