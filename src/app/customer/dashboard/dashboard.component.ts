import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plans, user_active_plan, user_upcoming_plan } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public active_plans=Array();
  public available_plans=Array();
  public upcoming_plans=Array();

  slideConfig = {
    "infinite": true,
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "arrows": false,
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  
  constructor(private http:HttpClient,private _router:Router) { 

    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials","*");

    this.http.get<any>(user_active_plan,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
              this.active_plans = data['active_plans'];
          } 
          else {
            // Swal.fire(
            //   'Something Went Wrong',
            //   data['message'],
            //   'error'
            // );
          }
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });

    this.http.get<any>(plans,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          // console.log(data)
          if (data['status_code'] == 200) {
              this.available_plans = data['plans'];
          } 
          else {
            // Swal.fire(
            //   'Something Went Wrong',
            //   data['message'],
            //   'error'
            // );
          }
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });

    this.http.get<any>(user_upcoming_plan,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
              this.upcoming_plans = data['upcoming_plans'];
          } 
          else {
            // Swal.fire(
            //   'Something Went Wrong',
            //   data['message'],
            //   'error'
            // );
          }
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    });

  }

  ngOnInit(): void {
  }

}
