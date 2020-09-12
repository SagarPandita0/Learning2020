import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { mySecurity } from "./Security.Token";

@Injectable()
export class myAuthGuard implements CanActivate {


  constructor( private _router: Router ,public _token : mySecurity) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._token.token.length != 0) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/Login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}