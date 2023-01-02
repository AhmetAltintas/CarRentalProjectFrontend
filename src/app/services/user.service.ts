import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/entities/dtos/userDto';
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
}
