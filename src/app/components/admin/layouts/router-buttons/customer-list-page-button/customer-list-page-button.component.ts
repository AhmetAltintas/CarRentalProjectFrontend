import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-customer-list-page-button',
  templateUrl: './customer-list-page-button.component.html',
  styleUrls: ['./customer-list-page-button.component.css']
})
export class CustomerListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Müşteri Listesi"
  }

  ngOnInit(): void {
  }

  routeToCustomerListPage(){
    this.routerService.customerListPage()
  }
}
