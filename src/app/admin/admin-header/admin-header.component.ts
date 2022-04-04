import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { admin_profile, logout } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public name=``;

  constructor(private _router:Router,private http:HttpClient) {

    this.http.get<any>(admin_profile,
      // {headers:headers,withCredentials:true,responseType:'json'}
      ).subscribe({
      next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            this.name=data['admin']["name"];
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

  ngOnInit(): void {}
  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
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