import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rent } from '../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiUrl = 'https://localhost:44332/api/Rents/getrentdetails';
  constructor(private httpClient: HttpClient) {}

  getRentDetails(): Observable<ListResponseModel<Rent>> {
    return this.httpClient.get<ListResponseModel<Rent>>(this.apiUrl);
  }
}
