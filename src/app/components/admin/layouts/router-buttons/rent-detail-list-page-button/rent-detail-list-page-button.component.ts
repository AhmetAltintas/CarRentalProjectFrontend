import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-rent-detail-list-page-button',
  templateUrl: './rent-detail-list-page-button.component.html',
  styleUrls: ['./rent-detail-list-page-button.component.css']
})
export class RentDetailListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Detaylı Kiralama Listesi"
  }

  ngOnInit(): void {
  }

  routeToRentalDetailListPage(){
    this.routerService.rentDetailListPage()
  }
}
