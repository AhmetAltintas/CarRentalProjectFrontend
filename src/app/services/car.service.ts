import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/entities/dtos/car';
import { CarDetailDto } from '../models/entities/dtos/carDetailDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44332/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'getcars';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl  + "getcardetails";
    return this. httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarById(id: number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'getcardetailsbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'getcarsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'getcarsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  addCar(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', car);
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', car);
  }

  delete(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', car);
  }
}
