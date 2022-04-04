import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { admin_desk_details } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public desk_details = Array();
  constructor(private http:HttpClient) {
    this.get_desk_details();
   }
 
  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  get_desk_details()
  {
    this.http.get<any>(admin_desk_details, 
      ).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.desk_details = data['desks'];
        }
        else {
          // Swal.fire(
          //   'Something Went Wrong',
          //   "server Error",
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

}
