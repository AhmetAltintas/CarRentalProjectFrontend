import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/url';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = ApiUrl + "customers/"
  constructor(private httpClient: HttpClient,private authService:AuthService) {}

  getAll(): Observable<ListResponseModel<Customer>> {
    let newPath = this.url + "getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getById(customerId:number): Observable<SingleResponseModel<Customer>>{
    let newPath = this.url + 'getbyid?id=' + customerId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }

  getByUserId(userId:number):Observable<SingleResponseModel<Customer>>{
    let newPath = this.url + "getByUserId?userId=" + userId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath)
  }



  getCurrentCustomer():Observable<SingleResponseModel<Customer>>{
    let currentUserId= this.authService.getCurrentUserId
    return this.getByUserId(currentUserId)
  }
}
