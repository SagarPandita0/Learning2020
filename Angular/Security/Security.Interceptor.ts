import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {mySecurity} from "./Security.Token"

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(public security : mySecurity) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.security.token}`
                }
            });
        return next.handle(request);
    }
}