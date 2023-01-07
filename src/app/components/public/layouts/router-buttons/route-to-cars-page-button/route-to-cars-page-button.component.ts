import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-cars-page-button',
  templateUrl: './route-to-cars-page-button.component.html',
  styleUrls: ['./route-to-cars-page-button.component.css']
})
export class RouteToCarsPageButtonComponent extends PublicChildComponentBaseComponent implements OnInit{

  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ){
    super(authService)
    this.innerHTML = "Tüm arabalar"
  }

  ngOnInit(): void {
      
  }

  routeToCarsPage(){
    this.routerService.carsPage()
  }
}
