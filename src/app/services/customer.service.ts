import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44332/api/customers/';
  constructor(private httpClient: HttpClient,private authService:AuthService) {}

  getAll(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl + "getall");
  }

  getById(customerId:number): Observable<SingleResponseModel<Customer>>{
    let newPath = this.apiUrl + 'getbyid?id=' + customerId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }

  getByUserId(userId:number):Observable<SingleResponseModel<Customer>>{
    return this.httpClient.get<SingleResponseModel<Customer>>(this.apiUrl + "getByUserId?userId=" + userId)
  }

  getCurrentCustomer():Observable<SingleResponseModel<Customer>>{
    let currentUserId= this.authService.getCurrentUserId
    return this.getByUserId(currentUserId)
  }
}
