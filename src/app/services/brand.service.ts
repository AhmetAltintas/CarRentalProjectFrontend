import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/url';
import { Brand } from '../models/entities/brand';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {

  url = ApiUrl + "brands/"

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.url + 'getall');
  }

  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.url + 'add', brand);
  }

  update(brand: Brand): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url + "update", brand)
  }

  delete(brand: Brand): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url + "delete", brand)
  }

}
