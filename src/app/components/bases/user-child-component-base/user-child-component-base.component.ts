import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonChildComponentBaseComponent } from '../common-child-component-base/common-child-component-base.component';

@Component({
  selector: 'app-user-child-component-base',
  templateUrl: './user-child-component-base.component.html',
  styleUrls: ['./user-child-component-base.component.css']
})
export class UserChildComponentBaseComponent extends CommonChildComponentBaseComponent{

  constructor(public override authService:AuthService){
    super(authService)
  }

  loggedIn(){
    return this.authService.loggedIn();
  }
}
