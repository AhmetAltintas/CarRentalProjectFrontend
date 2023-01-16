import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenKey } from 'src/app/models/constants/local-storage-keys';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private routerService: RouterService
  ){}

  ngOnInit(): void {
      this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({ 
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        response=> {
          this.toastrService.success(response.message, "Giriş ekranına yönlendiriliyorsunuz");
          this.routerService.loginPage()
        },
        responseError=> {
          this.toastrService.error(responseError.error.message);
        }
      )
    }else this.toastrService.error(FormIsMissing)
  }

  routeToLoginPage(){
    this.routerService.loginPage();
  }
}
