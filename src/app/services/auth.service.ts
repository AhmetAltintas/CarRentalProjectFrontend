import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { TokenKey } from '../models/constants/local-storage-keys';
import { AdminRole } from '../models/constants/roles';
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

  apiUrl = 'https://localhost:44332/api/auth/';
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'register',
      registerModel
    );
  }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
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

    let roleString = Object.keys(decodedToken).filter(t=>t.endsWith("/role"))[0]
    
    if (roleString) {
      for (let i = 0; i < decodedToken[roleString].length; i++) {
        if (decodedToken[roleString][i] === AdminRole) return true
      }
    }
    return false
  }
}
