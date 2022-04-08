import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { domain_URL, user_desk_details } from 'src/app/app.module';

@Component({
  selector: 'app-admin-booking-details',
  templateUrl: './admin-booking-details.component.html',
  styleUrls: ['./admin-booking-details.component.css']
})
export class AdminBookingDetailsComponent implements OnInit {



  public location_cpacity = 0;
  // public location_id = '';
  // public plan_id = 0;
  // public searchdate =``;

  constructor(private http:HttpClient) {

    this.http.get<any>(domain_URL+"/admin/desks", ).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.location_cpacity = data['desks'];
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

  ngOnInit(): void {
  }
  sideBarOpen = true

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
