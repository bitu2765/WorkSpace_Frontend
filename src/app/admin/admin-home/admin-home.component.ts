import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin_profile } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  public name=``;
  public email=``;
  public city=``;
  public address=``;
  public state=``;


  constructor(private http:HttpClient,private _router:Router) { 


    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Credentials","*");

    this.http.get<any>(admin_profile,{headers:headers,withCredentials:true,responseType:'json'}).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            this.name=data['admin']["name"];
            this.email=data['admin']["email"];
            this.city=data['admin']["city"];
            this.state=data['admin']["state"];
            this.address=data['admin']["address"];

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
  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
