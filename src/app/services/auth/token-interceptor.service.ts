import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let ck: Array<string> = document.cookie.split(';');
    // let options = new RequestOptions({withCredentials: true });
    let id='',token=``;
    for (let i: number = 0; i < ck.length; i += 1) {
        let tem = ck[i].split('=');
        // console.log(tem);
        if(tem[0].trim()=='auth_id')
        {
          id=tem[1];
        }
        if(tem[0].trim()=='auth_token')
        {
          token=tem[1];
        }
    }

    let reqeithtoken = req.clone({
      setHeaders:{
        auth_token:token,
        auth_id:id

      }
    });
    return next.handle(reqeithtoken);
  }
}
