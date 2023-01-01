import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44332/api/colors/';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl + "getall");
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', color);
  }

  update(color: Color): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", color)
  }

  delete(color: Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "delete", color)
  }
}
