import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { domain_name, login } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public id=1;
  public username="";
  public password="";
  private page="customer";
  constructor(private http:HttpClient,private _router:Router) {  

   }

  ngOnInit(): void {
  }

  public login_fun() {
    this.http.post<any>(login,{id:this.id,username:this.username,password:this.password}).subscribe({
      next: data => {
          console.log(data)
          if(data['status_code']!=200)
          {
            Swal.fire(
              'Wrong Information',
              data['Msg'],
              'error'
            );
            return;
          }
          var expires = "";
          var days=31;
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
          document.cookie = "auth_id=" + (data['auth_id'] || "")  + expires + ";domain:"+domain_name+":5000; path=/";
          document.cookie = "auth_token=" + (data['auth_token'] || "")  + expires + ";domain:"+domain_name+":5000; path=/";
          // console.log('done');
          this._router.navigateByUrl(this.page);
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })
  }

  public adminLogin() {
    document.getElementById('goToRegister')?.setAttribute("style", "display: none;");
    this.id=2;
    this.page="admin";
  }

  public userLogin() {
    document.getElementById('goToRegister')?.setAttribute("style", "display: block;");
    this.id=1;
    this.page="customer";
  }

}
