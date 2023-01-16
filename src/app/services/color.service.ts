import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/url';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  url = ApiUrl + "colors/"
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.url + "getall");
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.url + 'add', color);
  }

  update(color: Color): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url + "update", color)
  }

  delete(color: Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url + "delete", color)
  }
}
