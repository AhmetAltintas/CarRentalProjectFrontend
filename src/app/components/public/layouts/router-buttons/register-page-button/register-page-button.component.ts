import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-register-page-button',
  templateUrl: './register-page-button.component.html',
  styleUrls: ['./register-page-button.component.css']
})
export class RegisterPageButtonComponent extends PublicChildComponentBaseComponent implements OnInit{

  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ) {
    super(authService)
    this.innerHTML = "Kayıt Ol"
  }

  ngOnInit(): void {
      
  }

  routeToRegisterPage() {
    this.routerService.registerPage();
  }
}
