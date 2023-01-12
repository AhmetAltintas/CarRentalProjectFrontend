import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/entities/carImage';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44332/api/carimages/';

  constructor(private httpClient: HttpClient) {}

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "getbycarıd?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete?id=" + id, null)
  }

  add(file:any):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", file)
  }
}
