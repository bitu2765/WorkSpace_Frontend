import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { admin_desks, admin_desk_statistics, domain_URL, user_desk_details } from 'src/app/app.module';

@Component({
  selector: 'app-admin-booking-details',
  templateUrl: './admin-booking-details.component.html',
  styleUrls: ['./admin-booking-details.component.css']
})
export class AdminBookingDetailsComponent implements OnInit {



  public week_days = Array("Sun","Mon","Tues","Wed","Thur","Fri","Sat");
  public location_cpacity = 0;
  public desk_no = 1;
  public cur_month = new Date().getMonth();
  public cur_year = new Date().getFullYear();
  public total_days = new Date(this.cur_year, this.cur_month, 0).getDate();
  public no_of_days = Array();
  public buffer_day = new Date(this.cur_year, this.cur_month, 1).getDay();
  private booked_date = Array();
  // public location_id = '';
  // public plan_id = 0;
  // public searchdate =``;

  constructor(private http: HttpClient) {

    this.http.get<any>(admin_desks,).subscribe({
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

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  get_desk_details(num: any) {
    this.desk_no = num
    this.http.get<any>(admin_desk_statistics, {
      params: {
        desk_no: this.desk_no
      }
    }).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.booked_date = data['booking_dates'];
          // console.log(this.buffer_day);
          this.display_calendar()
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

  set_days(month: any) {
    this.cur_month = month.target.value;
    this.total_days = new Date(this.cur_year, this.cur_month, 0).getDate();
    this.buffer_day = new Date(this.cur_year, this.cur_month-1, 1).getDay();
    this.display_calendar()
  }


  display_calendar() {
    // console.log(this.total_days);
    this.no_of_days = Array(this.total_days)
    for (let j = 1; j <= this.total_days; j++) {
      this.no_of_days[j - 1] = 0;
    }

    for (let i = 0; i < this.booked_date.length; i++) {
      let temp_start = new Date(this.booked_date[i][0]);
      let temp_end = new Date(this.booked_date[i][1]);
      // console.log(temp_start.getMonth() );
      // console.log(this.booked_date[i][0]);
      if (this.cur_year == temp_start.getFullYear() && this.cur_month == temp_start.getMonth()+1) {
        let end_j = this.no_of_days.length;
        if (this.cur_year == temp_end.getFullYear() && this.cur_month == temp_end.getMonth()+1) {
          end_j = temp_start.getDate();
          // console.log(end_j );
        }
        for (let j = temp_start.getDate(); j <= end_j; j++) {
          this.no_of_days[j - 1] = 1;
        }
      }
      else if (this.cur_year == temp_end.getFullYear() && this.cur_month == temp_end.getMonth()+1) {
        let j = 1;
        if (this.cur_year == temp_start.getFullYear() && this.cur_month == temp_start.getMonth()+1) {
          j = temp_start.getDate();
          // console.log(temp_end.getDay() );
        }
        for (; j <= temp_end.getDate(); j++) {
          this.no_of_days[j - 1] = 1;
        }
        {

        }
      }
      else if ((this.cur_year >= temp_start.getFullYear() && this.cur_month >= temp_start.getMonth()+1) && (this.cur_year <= temp_end.getFullYear() && this.cur_month <= temp_end.getMonth()+1)) {
        for (let j = 1; j <= this.total_days; j++) {
          this.no_of_days[j - 1] = 1;
        }
      }
    }
  }

}
