import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { CarComponent } from './components/public/pages/car/car.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { PaymentComponent } from './components/user/pages/payment/payment.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { CarDetailListComponent } from './components/admin/pages/lists/car-detail-list/car-detail-list.component';
import { AddCarImageComponent } from './components/admin/pages/adds/add-car-image/add-car-image.component';
import { BrandListComponent } from './components/admin/pages/lists/brand-list/brand-list.component';
import { ColorListComponent } from './components/admin/pages/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/pages/lists/customer-list/customer-list.component';
import { RentDetailListComponent } from './components/admin/pages/lists/rent-detail-list/rent-detail-list.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { AddCarComponent } from './components/admin/pages/adds/add-car/add-car.component';
import { AddBrandComponent } from './components/admin/pages/adds/add-brand/add-brand.component';
import { AddColorComponent } from './components/admin/pages/adds/add-color/add-color.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: 'car-detail/:carId', component: CarDetailComponent },
  { path: "brand-list", component: BrandListComponent, canActivate: [AdminGuard] },
  { path: "color-list", component: ColorListComponent, canActivate: [AdminGuard] },
  { path: "car-detail-list", component: CarDetailListComponent, canActivate: [AdminGuard] },
  { path: "customer-list", component: CustomerListComponent, canActivate: [AdminGuard] },
  { path: "rent-detail-list", component: RentDetailListComponent, canActivate: [AdminGuard] },
  { path: "rent/:carId", component: RentComponent, canActivate: [LoginGuard] },
  { path: "pay", component: PaymentComponent, canActivate: [LoginGuard] },
  { path: "add-car", component: AddCarComponent, canActivate: [AdminGuard] },
  { path: "add-car-image/:carId" , component:AddCarImageComponent, canActivate: [AdminGuard] },
  { path: "add-brand", component: AddBrandComponent, canActivate: [AdminGuard] },
  { path: "add-color", component: AddColorComponent, canActivate: [AdminGuard] },
  { path: "login", component:LoginComponent, canActivate: [GuestGuard] },
  { path: "register", component:RegisterComponent, canActivate: [GuestGuard] },
  { path: "profile", component:ProfileComponent, canActivate: [LoginGuard] },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
