import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user_purchase_history } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public plan_history=Array();

  constructor(private http:HttpClient,private _router:Router) { 

    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials","*");

    this.http.get<any>(user_purchase_history,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            // Swal.fire(
            //   'Active Plans',
            //   'Fetched Successfully!',
            //   'success'
            // );
            // console.log(data);
            this.plan_history = data['purchase_history'];
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
