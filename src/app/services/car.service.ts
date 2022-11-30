import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44332/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcars"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarById(id:number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcardetailsbyid?id="+id
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrandId(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColorId(colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
