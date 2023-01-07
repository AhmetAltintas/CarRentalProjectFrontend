import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-login-page-button',
  templateUrl: './login-page-button.component.html',
  styleUrls: ['./login-page-button.component.css']
})
export class LoginPageButtonComponent extends PublicChildComponentBaseComponent implements OnInit{

  constructor(
    private routerService:RouterService,
    public override authService:AuthService
  ) {
    super(authService)
    this.innerHTML = "Giriş Yap"
  }

  ngOnInit(): void {
      
  }

  routeToLoginPage(){
    this.routerService.loginPage()
  }
}
