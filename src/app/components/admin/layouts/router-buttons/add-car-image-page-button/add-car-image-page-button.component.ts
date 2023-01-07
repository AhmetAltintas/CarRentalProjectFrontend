import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-add-car-image-page-button',
  templateUrl: './add-car-image-page-button.component.html',
  styleUrls: ['./add-car-image-page-button.component.css']
})
export class AddCarImagePageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarIdFromParent: number

  constructor(
    private routerService:RouterService,
    public override authService: AuthService
  ){
    super(authService)
    this.innerHTML = "Araba Görseli Ekle"
  }

  ngOnInit(): void {
      
  }

  routeToAddCarImagePageByCarId(){
    this.routerService.addCarImagePageByCarId(this.currentCarIdFromParent)
  }
}
