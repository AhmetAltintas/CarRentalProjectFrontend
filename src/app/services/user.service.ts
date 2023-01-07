import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateEmailDTO } from '../models/entities/dtos/updateEmailDTO';
import { UpdateFirstAndLastNameDTO } from '../models/entities/dtos/updateFirstAndLastNameDTO';
import { UserDTO } from '../models/entities/dtos/userDto';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44332/api/Users/';
  constructor(
    private authService:AuthService,
    private httpClient: HttpClient
  ) { }

  getDTOById(id: number) {
    return this.httpClient.get<SingleResponseModel<UserDTO>>(this.apiUrl + "getDTOById?id=" + id)
  }

  getCurrentUserDTO() {
    let currentUserId = this.authService.getCurrentUserId
    return this.getDTOById(currentUserId)
  }

  updateFirstAndLastName(updateFirstAndLastNameDTO:UpdateFirstAndLastNameDTO): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "updateFirstAndLastName", updateFirstAndLastNameDTO)
  }

  updateEmail(updateEmailDTO:UpdateEmailDTO):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "updateEmail", updateEmailDTO)
  }
}
