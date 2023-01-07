import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  
  constructor(private authService: AuthService, private routerService:RouterService){}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.loggedIn()) return true;

    this.routerService.homePage()
    return false
  }
  
}
