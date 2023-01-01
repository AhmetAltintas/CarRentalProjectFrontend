import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/entities/carImage';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44332/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getbycarıd?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
