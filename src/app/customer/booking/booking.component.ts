import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { particular_plan_detail_on_particular_location, user_desk_details, user_plan_purchase } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public desk_detail = Array();
  public location_id = '';
  public plan_id = 0;
  public searchdate =``;
  public plan_detail = `` as any;//new Map<String,String | Number>();

  constructor(private http: HttpClient,private route:ActivatedRoute,private router:Router) {
    
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let location = params.get('location_id');
      let plan = parseInt(params.get('plan_id') || "0");
      this.location_id = location || "";
      this.plan_id = plan ? plan:0;
      this.getdeskdetails();
      this.http.get<any>(particular_plan_detail_on_particular_location, 
        { 
          // headers: headers, withCredentials: true, responseType: 'json',
        params:{ location_id:this.location_id,plan_id:this.plan_id} }).subscribe({
        next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            this.plan_detail = data['plan details'];
            // console.log(this.plan_detail["plan_type"]);
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
    })

  }

  SendDatetoFunction(event: any) {
    this.searchdate =event.target.value;
    // console.log(event.target.value);
    this.getdeskdetails();
  }


  getdeskdetails() {
    // console.log("hiii");
    // const headers = new HttpHeaders();
    // headers.set("Access-Control-Allow-Credentials", "*");

    
    if(this.location_id==``)
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
      params:{ date:this.searchdate,location:this.location_id} }).subscribe({
      next: data => {
        // console.log(data)
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
    if(this.location_id==``)
    {
      Swal.fire(
        "Error!",
        "select location",
        'error'
      );
      return;
    }

    Swal.showLoading();

    this.http.post<any>(user_plan_purchase,{ start_date:this.searchdate,location_id:this.location_id ,plan_id:this.plan_id}
    // ,{headers:headers,withCredentials:true,responseType:'json'}
    ).subscribe({
      next: data => {
        if(Swal.isLoading())Swal.hideLoading()
        console.log(data)
        if (data['status_code'] == 200) {
          // this.desk_detail = data['desks'];
          Swal.fire(
            "Congrats!",
            data['message'],
            'success'
          );
          this.router.navigateByUrl("customer/history");
        }
        else if(data['status_code'] == 422) {
          Swal.fire(
            "Error",
            data['message'],
            'error'
          );
        }
        else if(data['status_code'] == 404) {
          let msg = ``;
          if(data.hasOwnProperty("message"))
          {
            msg=data["message"];
          }
          else if(data.hasOwnProperty("error"))
          {
            for(let i=0;i<data["error"].length;i++)
            {
              msg=msg+data['error'][i]+" ";
            }
          }
          
            Swal.fire(
              "Error",
              msg,
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
