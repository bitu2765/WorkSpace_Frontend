import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { locations, user_desk_details, user_plan_purchase } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public desk_detail = Array();
  public locations = Array();

  public searchdate =``;
  public searchlocation=``;

  constructor(private http: HttpClient) {
    
    this.http.get<any>(locations,).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.locations = data['Locations'];
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

  SendDatetoFunction(event: any) {
    this.searchdate =event.target.value;
    // console.log(event.target.value);
  }

  SendLocationtoFunction(event: any) {
    this.searchlocation =event.target.value;
    // console.log(event.target.value);
  }

  getdeskdetails() {
    // console.log("hiii");
    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials", "*");

    if(this.searchdate==``)
    {
      Swal.fire(
        "Error!",
        "select date",
        'error'
      );
      return;
    }
    if(this.searchlocation==``)
    {
      Swal.fire(
        "Error!",
        "select location",
        'error'
      );
      return;
    }

    this.http.get<any>(user_desk_details, 
      { 
        // headers: headers, withCredentials: true, responseType: 'json',
      params:{ date:this.searchdate,location:this.searchlocation} }).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.desk_detail = data['desks'];
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

  purchaseplan(){
  
  //   const headers = new HttpHeaders({
  //   // 'Content-type':'application/json',
  //   // 'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  // });
  //   headers.set("Access-Control-Allow-Credentials", "*");

    if(this.searchdate==``)
    {
      Swal.fire(
        "Error!",
        "select date",
        'error'
      );
      return;
    }
    if(this.searchlocation==``)
    {
      Swal.fire(
        "Error!",
        "select location",
        'error'
      );
      return;
    }

    this.http.post<any>(user_plan_purchase,{ start_date:this.searchdate,location_id:this.searchlocation ,plan_id:'8'}
    // ,{headers:headers,withCredentials:true,responseType:'json'}
    ).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          // this.desk_detail = data['desks'];
          Swal.fire(
            "Congrats!",
            data['message'],
            'success'
          );
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
