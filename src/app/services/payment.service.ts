import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/entities/payment';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  apiUrl = 'https://localhost:44332/api/payments/';

  constructor(private httpClient:HttpClient) { }

  pay(payment:Payment):Observable<ResponseModel>{
    let newPath = this.apiUrl + "pay"
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }

  delete(payment:Payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", payment)
  }

  getAllByCustomerId(customerId:number){
    return this.httpClient.get<ListResponseModel<Payment>>(this.apiUrl + "getAllByCustomerId?customerId=" + customerId)
  }

  checkIfThisCardIsAlreadySavedForThisCustomer(payment:Payment){
    return this.httpClient.post<ResponseModel>(this.apiUrl + "checkIfThisCardIsAlreadySavedForThisCustomer", payment)
  }

  add(payment:Payment){
    this.httpClient.post<ResponseModel>(this.apiUrl + "add", payment)
  }
}
