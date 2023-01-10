import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-car-detail-list-page-button',
  templateUrl: './car-detail-list-page-button.component.html',
  styleUrls: ['./car-detail-list-page-button.component.css']
})
export class CarDetailListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Detaylı Araba Listesi"
  }

  ngOnInit(): void {
  }

  routeToCarDetailListPage(){
    this.routerService.carDetailListPage()
  }
}
