import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandOperationComponent } from './components/brand-operation/brand-operation.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarOperationComponent } from './components/car-operation/car-operation.component';
import { CarComponent } from './components/car/car.component';
import { ColorOperationComponent } from './components/color-operation/color-operation.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentOperationComponent } from './components/rent-operation/rent-operation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'carDetail/:carId', component: CarDetailComponent },
  { path: 'rents/add', component:RentOperationComponent},
  { path: "payment/:carId/:datesDiff/:rentDate/:returnDate", component:PaymentComponent},
  { path: "brandoperation", component:BrandOperationComponent},
  { path: "coloroperation", component:ColorOperationComponent},
  { path: "caroperation", component:CarOperationComponent},
  { path: "login", component:LoginComponent},
  { path: "register", component:RegisterComponent},
  { path: "profile", component:ProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
