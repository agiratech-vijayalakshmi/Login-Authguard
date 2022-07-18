import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(localStorage.getItem("isLoggedIn") != "true"){
    
        return false;
    
      }
      else{
        return true;
      }
  }
  
}
