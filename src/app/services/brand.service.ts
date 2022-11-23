import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44332/api/brands/getall';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
