import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-add-brand-page-button',
  templateUrl: './add-brand-page-button.component.html',
  styleUrls: ['./add-brand-page-button.component.css']
})
export class AddBrandPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Marka Ekle"
  }

  ngOnInit(): void {
  }

  routeToAddBrandPage(){
    this.routerService.addBrandPage()
  }
}
