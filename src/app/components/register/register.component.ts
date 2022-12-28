import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

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
    private toastrService:ToastrService
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
      console.log(this.registerForm.value)

      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        response=> {
          this.toastrService.success(response.message);
        },
        responseError=> {
          this.toastrService.error(responseError.error);
        }
      )
    }
  }

  // login() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);

  //     let loginModel = Object.assign({}, this.loginForm.value);
  //     this.authService.login(loginModel).subscribe(
  //       (response) => {
  //         this.toastrService.info(response.message);
  //         localStorage.setItem('token', response.data.token);
  //       },
  //       (responseError) => {
  //         console.log(responseError.error);
  //         this.toastrService.error(responseError.error);
  //       }
  //     );
  //   }
  // }
}