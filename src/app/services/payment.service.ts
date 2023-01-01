import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/entities/payment';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  apiUrl = 'https://localhost:44332/api/';

  constructor(private httpClient:HttpClient) { }

  pay(payment:Payment):Observable<ResponseModel>{
    let newPath = this.apiUrl + "payments/pay"
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }
}
