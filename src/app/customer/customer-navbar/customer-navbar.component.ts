import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logout, user_profile } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent implements OnInit {

  public name=``;

  constructor(private http:HttpClient,private _router:Router) { 

    this.http.get<any>(user_profile,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          // console.log(data)
          if (data['status_code'] == 200) {
            this.name=data['customer']["name"];
          } 
          else {
            Swal.fire(
              'Something Went Wrong',
              "Try to Login again",
              'error'
            );
            this._router.navigateByUrl("login");
          }
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })

  }

  ngOnInit(): void {
  }

  logout_fun(){

    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials","*");

    this.http.get<any>(logout,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            Swal.fire(
              'Logout',
              'Logout Successfully!',
              'success'
            );

            let currentUrl = this._router.url;
            this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this._router.navigate([currentUrl]);
            });

          } 
          else {
            Swal.fire(
              'Something Went Wrong',
              "Try to Logout again",
              'error'
            );
          }
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });
  }

}
