import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationfilterGuard implements CanActivate {
 constructor(private router:Router){}
  //router: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //should be replaced with cookies rather than localstorage
      if(localStorage.getItem("username")){
        //if the session is present then give the component requested
      return true;
    }
     this.router.navigate(['Home/Login']);
     return false;
  }

}
