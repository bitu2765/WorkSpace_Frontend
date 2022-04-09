import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { email_verify } from '../app.module';

@Component({
  selector: 'app-emailverify',
  templateUrl: './emailverify.component.html',
  styleUrls: ['./emailverify.component.css']
})
export class EmailverifyComponent implements OnInit {

  private token_id=``;
  public verify_status = 0;
  public message=``;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let token = params.get('id');
      this.token_id = token || `` ;
      this.http.get<any>(email_verify+"?token="+this.token_id,).subscribe({
        next: data => {
          console.log(data)
          if (data['status_code'] == 200) {
            this.message = data['message'];
            console.log(data["message"]);
            this.verify_status=1;
            // Swal.fire(
            //   'Email Verification',
            //   this.message,
            //   'success'
            // );
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

}
