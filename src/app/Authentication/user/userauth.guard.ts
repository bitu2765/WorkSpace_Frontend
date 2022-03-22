import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate,Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { domain_URL, user_verify } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {

  constructor(private _router:Router,private http:HttpClient){}

  canActivate():Observable<boolean | UrlTree > {

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Credentials","*");
    let val=false;
    return this.http.get<any>(user_verify,{headers:headers,withCredentials:true,responseType:'json'}).pipe(
      map(res => {
        // console.log(res['success']);
        if (res['status_code'] == 200) {
            return true;
        } else {
            this._router.navigateByUrl("login");
            return false;
        }
    }));
  }
  
}
