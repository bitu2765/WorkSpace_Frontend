import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { domain_URL } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  user_url= domain_URL +'/user/verify';
  constructor(private http:HttpClient) { }

  loggedInUser():boolean {
    // let ck: Array<string> = document.cookie.split(';');
    // // let options = new RequestOptions({withCredentials: true });
    
    // for (let i: number = 0; i < ck.length; i += 1) {
    //     console.log(ck[i].split("="));
    // }

    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Credentials","*");
    let val=false;
    this.http.get<any>(this.user_url,{headers:headers,withCredentials:true,responseType:'json'}).subscribe({
      next: data => {
          console.log(data['success'])
          if(data['success'])
          {
            val=true;
          }
          return false;
      },
      error: error => {
          // this.errorMessage = error.message;
          console.log('There was an error!', error);
          return false;
      }
    });
    // console.log(ck);
    return val;
  }
}
