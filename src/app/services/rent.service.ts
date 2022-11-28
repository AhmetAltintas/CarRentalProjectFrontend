import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = 'https://localhost:44332/api/';
  constructor(private httpClient: HttpClient) {}

  getRentDetails(): Observable<ListResponseModel<Rent>> {
    let newPath = this.apiUrl + "rents/getrentdetails"
    return this.httpClient.get<ListResponseModel<Rent>>(newPath);
  }
}
