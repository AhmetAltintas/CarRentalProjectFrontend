import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { TokenKey } from '../models/constants/local-storage-keys';
import { AdminRole } from '../models/constants/roles';
import { ApiUrl } from '../models/constants/url';
import { UpdatePasswordDTO } from '../models/entities/dtos/updatePasswordDTO';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelperService: JwtHelperService = new JwtHelperService();

  url = ApiUrl + "auth/"

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.url + 'register',
      registerModel
    );
  }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.url + 'login',
      loginModel
    );
  }

  logout() {
    this.localStorageService.remove(TokenKey)
    window.location.reload()
  }

  isAuthenticated() {
    if (localStorage.getItem(TokenKey)) {
      return true;
    } else {
      return false;
    }
  }

  get getToken(){
    return this.localStorageService.get(TokenKey)
  }

  get getDecodedToken() {
    let token = this.getToken
    return this.jwtHelperService.decodeToken(token)
  }

  get getCurrentUserId() {
    let decodedToken = this.getDecodedToken
    let nameidentifierString = Object.keys(decodedToken).filter(t=>t.endsWith("/nameidentifier"))[0]
    let userId: number = decodedToken[nameidentifierString]
    return userId
  }

  loggedIn() {
    let token = this.getToken
    return !this.jwtHelperService.isTokenExpired(token);
  }
 
  isAdmin() {
    if(!this.loggedIn()) return false

    let decodedToken = this.getDecodedToken

    let roleString = Object.keys(decodedToken).filter(t=>t.endsWith("/role"))[0];

    if (roleString) {
      return decodedToken[roleString].includes(AdminRole);
    }
    return false
  }

  updatePassword(updatePasswordDTO:UpdatePasswordDTO):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url + "updatePassword", updatePasswordDTO)
  }
}
