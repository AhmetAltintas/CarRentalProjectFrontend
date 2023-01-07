import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-home-page-button',
  templateUrl: './home-page-button.component.html',
  styleUrls: ['./home-page-button.component.css']
})
export class HomePageButtonComponent extends PublicChildComponentBaseComponent implements OnInit {

  constructor(private routerService: RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Ana Sayfa"
  }

  ngOnInit(): void {
  }

  routeToHomePage(){
    this.routerService.homePage()
  }

}
