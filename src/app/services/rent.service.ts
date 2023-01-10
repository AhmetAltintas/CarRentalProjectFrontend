import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { Rent } from '../models/entities/rent';
import { ResponseModel } from '../models/responseModels/responseModel';
import { Payment } from '../models/entities/payment';
import { PaymentService } from './payment.service';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from './router.service';
import { RentDetailDTO } from '../models/entities/dtos/rent-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = 'https://localhost:44332/api/';

  constructor(private httpClient: HttpClient, private paymentService:PaymentService, private toastrService:ToastrService, private routerService:RouterService) {}

  getRentDetails(): Observable<ListResponseModel<RentDetailDTO>> {
    let newPath = this.apiUrl + "rents/getrentdetails"
    return this.httpClient.get<ListResponseModel<RentDetailDTO>>(newPath);
  }

  addRent(rent:Rent):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rents/add", rent)
  }

  checkRulesForAdding(rent:Rent):Observable<ResponseModel> {
    let newPath = this.apiUrl + "rents/rulesforadding"
    return this.httpClient.post<ResponseModel>(newPath,rent);
  }

  payAndRent(payment: Payment, rent: Rent){
    this. paymentService.pay(payment).subscribe(response=>{
      console.log(rent)
      this.addRent(rent).subscribe(rentResponse=>{
        this.toastrService.success(rentResponse.message)
      }, rentResponseError=>{
        this.toastrService.error(rentResponseError.error.message)
      })
      this.toastrService.success(response.message)
      this.routerService.homePage();
    }, responseError=> {
      this.toastrService.error(responseError.error.message)
    })
  }
}
