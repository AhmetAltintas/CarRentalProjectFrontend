import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentComponent } from './components/rent/rent.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import { RentOperationComponent } from './components/rent-operation/rent-operation.component';
import { BrandOperationComponent } from './components/brand-operation/brand-operation.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { ColorOperationComponent } from './components/color-operation/color-operation.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageButtonComponent } from './components/buttons/login-page-button/login-page-button.component';
import { CommonChildComponentBaseComponent } from './components/bases/common-child-component-base/common-child-component-base.component';
import { PublicChildComponentBaseComponent } from './components/bases/public-child-component-base/public-child-component-base.component';
import { RegisterPageButtonComponent } from './components/buttons/register-page-button/register-page-button.component';
import { HomePageButtonComponent } from './components/buttons/home-page-button/home-page-button.component';
import { AccountOptionsComponent } from './components/account-options/account-options.component';
import { ProfilePageButtonComponent } from './components/buttons/profile-page-button/profile-page-button.component';
import { UserChildComponentBaseComponent } from './components/bases/user-child-component-base/user-child-component-base.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutButtonComponent } from './components/buttons/logout-button/logout-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    BrandComponent,
    RentComponent,
    NaviComponent,
    CarDetailComponent,
    FilterPipePipe,
    RentOperationComponent,
    PaymentComponent,
    BrandOperationComponent,
    CarOperationComponent,
    ColorOperationComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageButtonComponent,
    CommonChildComponentBaseComponent,
    PublicChildComponentBaseComponent,
    RegisterPageButtonComponent,
    HomePageButtonComponent,
    AccountOptionsComponent,
    ProfilePageButtonComponent,
    UserChildComponentBaseComponent,
    ProfileComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
