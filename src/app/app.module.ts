import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';import { LoginComponent } from './components/public/pages/login/login.component';
import { AppComponent } from './app.component';
import { CarComponent } from './components/public/pages/car/car.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { PaymentComponent } from './components/user/pages/payment/payment.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { LoginPageButtonComponent } from './components/public/layouts/router-buttons/login-page-button/login-page-button.component';
import { RegisterPageButtonComponent } from './components/public/layouts/router-buttons/register-page-button/register-page-button.component';
import { HomePageButtonComponent } from './components/public/layouts/router-buttons/home-page-button/home-page-button.component';
import { AccountOptionsComponent } from './components/user/layouts/account-options/account-options.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { LogoutButtonComponent } from './components/user/layouts/logout-button/logout-button.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/public/layouts/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { RouteToCarsPageButtonComponent } from './components/public/layouts/router-buttons/route-to-cars-page-button/route-to-cars-page-button.component';
import { BrandSelectOptionCarFilterComponent } from './components/public/layouts/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { ColorSelectOptionCarFilterComponent } from './components/public/layouts/color-select-option-car-filter/color-select-option-car-filter.component';
import { CarImagesSliderByCarIdComponent } from './components/public/layouts/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { RouteToCarDetailPageButtonComponent } from './components/public/layouts/router-buttons/route-to-car-detail-page-button/route-to-car-detail-page-button.component';
import { UpdateEmailComponent } from './components/user/layouts/updates/update-email/update-email.component';
import { UpdatePasswordComponent } from './components/user/layouts/updates/update-password/update-password.component';
import { UpdateFirstAndLastNameComponent } from './components/user/layouts/updates/update-first-and-last-name/update-first-and-last-name.component';
import { CarsFilterPipe } from './pipes/cars-filter.pipe';
import { ProfilePageButtonComponent } from './components/user/layouts/router-buttons/profile-page-button/profile-page-button.component';
import { PayWithSavedCardsComponent } from './components/user/layouts/pay-with-saved-cards/pay-with-saved-cards.component';
import { FindeksPointBoardComponent } from './components/user/layouts/findeks-point-board/findeks-point-board.component';
import { BrandListComponent } from './components/admin/pages/lists/brand-list/brand-list.component';
import { DeletePaymentComponent } from './components/user/layouts/deletes/delete-payment/delete-payment.component';
import { CarDetailListComponent } from './components/admin/pages/lists/car-detail-list/car-detail-list.component';
import { ColorListComponent } from './components/admin/pages/lists/color-list/color-list.component';
import { RentDetailListComponent } from './components/admin/pages/lists/rent-detail-list/rent-detail-list.component';
import { CustomerListComponent } from './components/admin/pages/lists/customer-list/customer-list.component';
import { AddBrandComponent } from './components/admin/pages/adds/add-brand/add-brand.component';
import { AddCarComponent } from './components/admin/pages/adds/add-car/add-car.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminChildComponentBaseComponent } from './components/admin/bases/admin-child-component-base/admin-child-component-base.component';
import { AdministrationDropdownComponent } from './components/admin/layouts/administration-dropdown/administration-dropdown.component';
import { DeleteBrandComponent } from './components/admin/layouts/deletes/delete-brand/delete-brand.component';
import { DeleteCarImageComponent } from './components/admin/layouts/deletes/delete-car-image/delete-car-image.component';
import { DeleteCarComponent } from './components/admin/layouts/deletes/delete-car/delete-car.component';
import { DeleteColorComponent } from './components/admin/layouts/deletes/delete-color/delete-color.component';
import { AddCarImagePageButtonComponent } from './components/admin/layouts/router-buttons/add-car-image-page-button/add-car-image-page-button.component';
import { UpdateBrandComponent } from './components/admin/layouts/updates/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/admin/layouts/updates/update-car/update-car.component';
import { UpdateColorComponent } from './components/admin/layouts/updates/update-color/update-color.component';
import { AddCarImageComponent } from './components/admin/pages/adds/add-car-image/add-car-image.component';
import { AddColorComponent } from './components/admin/pages/adds/add-color/add-color.component';
import { CommonChildComponentBaseComponent } from './components/public/bases/common-child-component-base/common-child-component-base.component';
import { PublicChildComponentBaseComponent } from './components/public/bases/public-child-component-base/public-child-component-base.component';
import { UserChildComponentBaseComponent } from './components/user/bases/user-child-component-base/user-child-component-base.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrandsFilterPipe } from './pipes/brands-filter.pipe';
import { ColorsFilterPipe } from './pipes/colors-filter.pipe';
import { SmallNumberInputComponent } from './form-controls/small-number-input/small-number-input.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { RouteToRentPageButtonComponent } from './components/public/layouts/router-buttons/route-to-rent-page-button/route-to-rent-page-button.component';
import { ShowPasswordOnHoverDirective } from './directives/show-password-on-hover.directive';
import { AddBrandPageButtonComponent } from './components/admin/layouts/router-buttons/add-brand-page-button/add-brand-page-button.component';
import { AddCarPageButtonComponent } from './components/admin/layouts/router-buttons/add-car-page-button/add-car-page-button.component';
import { AddColorPageButtonComponent } from './components/admin/layouts/router-buttons/add-color-page-button/add-color-page-button.component';
import { BrandListPageButtonComponent } from './components/admin/layouts/router-buttons/brand-list-page-button/brand-list-page-button.component';
import { CarDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/car-detail-list-page-button/car-detail-list-page-button.component';
import { ColorListPageButtonComponent } from './components/admin/layouts/router-buttons/color-list-page-button/color-list-page-button.component';
import { CustomerListPageButtonComponent } from './components/admin/layouts/router-buttons/customer-list-page-button/customer-list-page-button.component';
import { RentDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/rent-detail-list-page-button/rent-detail-list-page-button.component';
import { TokenInterceptor } from './interceptors/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentComponent,
    NaviComponent, 
    CarDetailComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageButtonComponent,
    RegisterPageButtonComponent,
    HomePageButtonComponent,
    AccountOptionsComponent,
    ProfileComponent,
    LogoutButtonComponent,
    BrandAndColorSelectOptionCarFilterComponent,
    RouteToCarsPageButtonComponent,
    BrandSelectOptionCarFilterComponent,
    ColorSelectOptionCarFilterComponent,
    CarImagesSliderByCarIdComponent,
    RouteToCarDetailPageButtonComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
    UpdateFirstAndLastNameComponent,
    CarsFilterPipe,
    ProfilePageButtonComponent,
    PayWithSavedCardsComponent,
    FindeksPointBoardComponent,
    DeletePaymentComponent,
    BrandListComponent,
    CarDetailListComponent,
    ColorListComponent,
    CustomerListComponent,
    RentDetailListComponent,
    AddBrandComponent,
    AddCarComponent,
    AddCarImageComponent,
    AddColorComponent,
    BrandsFilterPipe,
    ColorsFilterPipe,
    AdministrationDropdownComponent,
    DeleteBrandComponent,
    DeleteCarComponent,
    DeleteCarImageComponent,
    DeleteColorComponent,
    UpdateBrandComponent,
    UpdateCarComponent,
    UpdateColorComponent,
    AdminChildComponentBaseComponent,
    AddCarImagePageButtonComponent,
    UserChildComponentBaseComponent,
    PublicChildComponentBaseComponent,
    CommonChildComponentBaseComponent,
    SmallNumberInputComponent,
    RouteToRentPageButtonComponent,
    ShowPasswordOnHoverDirective,
    AddBrandPageButtonComponent,
    AddCarPageButtonComponent,
    AddColorPageButtonComponent,
    BrandListPageButtonComponent,
    CarDetailListPageButtonComponent,
    ColorListPageButtonComponent,
    CustomerListPageButtonComponent,
    RentDetailListPageButtonComponent
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
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
