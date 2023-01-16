import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenKey } from 'src/app/models/constants/local-storage-keys';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toastrService.info(response.message);
          this.localStorageService.save(TokenKey, response.data.token)
          
          setTimeout(()=> {window.location.reload();},200)
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    }else this.toastrService.error(FormIsMissing)
  }

  routeToRegisterPage(){
    this.routerService.registerPage();
  }
}
