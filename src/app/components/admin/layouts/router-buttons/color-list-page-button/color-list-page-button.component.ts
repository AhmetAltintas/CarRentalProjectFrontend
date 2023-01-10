import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-color-list-page-button',
  templateUrl: './color-list-page-button.component.html',
  styleUrls: ['./color-list-page-button.component.css']
})
export class ColorListPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Renk Listesi"
  }

  ngOnInit(): void {
  }

  routeToColorListPage(){
    this.routerService.colorListPage()
  }
}
