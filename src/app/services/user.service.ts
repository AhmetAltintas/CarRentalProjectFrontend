import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/url';
import { UpdateEmailDTO } from '../models/entities/dtos/updateEmailDTO';
import { UpdateFirstAndLastNameDTO } from '../models/entities/dtos/updateFirstAndLastNameDTO';
import { UserDTO } from '../models/entities/dtos/userDto';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = ApiUrl + 'users/';
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  getDTOById(id: number) {
    let newPath = this.url + 'getDTOById?id=' + id;
    return this.httpClient.get<SingleResponseModel<UserDTO>>(newPath);
  }

  updateFirstAndLastName(
    updateFirstAndLastNameDTO: UpdateFirstAndLastNameDTO
  ): Observable<ResponseModel> {
    let newPath = this.url + 'updateFirstAndLastName';
    return this.httpClient.post<ResponseModel>(
      newPath,
      updateFirstAndLastNameDTO
    );
  }

  updateEmail(updateEmailDTO: UpdateEmailDTO): Observable<ResponseModel> {
    let newPath = this.url + 'updateEmail';
    return this.httpClient.post<ResponseModel>(newPath, updateEmailDTO);
  }

  getCurrentUserDTO() {
    let currentUserId = this.authService.getCurrentUserId;
    return this.getDTOById(currentUserId);
  }
}
