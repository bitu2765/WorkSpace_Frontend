import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plans } from '../app.module';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {


  public available_plans=Array();



  constructor(private http:HttpClient,private router:Router) {


    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials","*");


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

   }

  ngOnInit(): void {
  }

}
