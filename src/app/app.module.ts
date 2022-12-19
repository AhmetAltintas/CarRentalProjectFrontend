import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    ColorOperationComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
