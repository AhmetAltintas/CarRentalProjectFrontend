import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-add-car-page-button',
  templateUrl: './add-car-page-button.component.html',
  styleUrls: ['./add-car-page-button.component.css']
})
export class AddCarPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit{

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Araba Ekle"
  }

  ngOnInit(): void {
  }

  routeToAddCarPage(){
    this.routerService.addCarPage()
  }
}
