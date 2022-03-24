import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plans } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent implements OnInit {

  public plans=Array();

  constructor(private http:HttpClient,private _router:Router) { 


    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Credentials","*");

    this.http.get<any>(plans,{headers:headers,withCredentials:true,responseType:'json'}).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            this.plans = data['plans'];
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
