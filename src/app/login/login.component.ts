import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { domain_URL } from '../app.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username=``;
  public password=``;
  constructor(private http:HttpClient,private _router:Router) {  
   }

  ngOnInit(): void {
  }

  public login_fun() {
    this.http.post<any>(domain_URL+'/login',{id:1,username:this.username,password:this.password}).subscribe({
      next: data => {
          // console.log(data)
          var expires = "";
          var days=31;
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60));
          expires = "; expires=" + date.toUTCString();
          document.cookie = "auth_id=" + (data['auth_id'] || "")  + expires + "; path=/";
          document.cookie = "auth_token=" + (data['auth_token'] || "")  + expires + ";domain:127.0.0.1; path=/";
          // console.log('done');
          this._router.navigateByUrl('home-component');
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })
  }

}
