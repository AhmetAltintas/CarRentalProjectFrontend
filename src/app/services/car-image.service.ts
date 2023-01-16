import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/url';
import { CarImage } from '../models/entities/carImage';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  url = ApiUrl + "carImages/"
  constructor(private httpClient: HttpClient) {}

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "getbycarıd?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  delete(image: CarImage):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.url + "delete", image)
  }

  add(file:any):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.url + "add", file)
  }
}
