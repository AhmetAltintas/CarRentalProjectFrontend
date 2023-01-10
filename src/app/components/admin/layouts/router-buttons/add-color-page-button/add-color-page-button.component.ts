import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-add-color-page-button',
  templateUrl: './add-color-page-button.component.html',
  styleUrls: ['./add-color-page-button.component.css']
})
export class AddColorPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Renk Ekle"
  }

  ngOnInit(): void {
  }

  routeToAddColorPage(){
    this.routerService.addColorPage()
  }

}
