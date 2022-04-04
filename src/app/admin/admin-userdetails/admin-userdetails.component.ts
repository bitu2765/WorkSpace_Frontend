import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin_user_details } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-userdetails',
  templateUrl: './admin-userdetails.component.html',
  styleUrls: ['./admin-userdetails.component.css']
})
export class AdminUserdetailsComponent implements OnInit {

  constructor(private http:HttpClient,private _router:Router) { 


    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials","*");

    this.http.get<any>(admin_user_details,
      {
        // headers:headers,withCredentials:true,responseType:'json',
      params:{page:2,per_page:2}}
      ).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            // this.plans = data['plans'];
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
  // totalLength:any;
  // page:number=1;

  ngOnInit(): void {
    // this.totalLength=result.length;
  }
  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
