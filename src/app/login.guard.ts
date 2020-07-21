import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    



      const myToken = localStorage.getItem('token');
      // if(myToken)
      //   return true;
      // else
      //   false;
      return !!myToken;
  }
  
}
