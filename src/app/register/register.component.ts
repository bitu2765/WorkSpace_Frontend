import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { domain_URL } from '../app.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public username=``;
  public mobileno=``;
  public password=``;
  public email=``;
  public confirm_password=``;
  public name=``;

  constructor(private http:HttpClient) {  
  }

  ngOnInit(): void {
  }

  user_registration(){

    if (this.mobileno.length != 10)
    {
      Swal.fire(
        'Mobile No',
        'Mobile No is Incorrect',
        'error'
      )
      return;
    }
    if (this.password != this.confirm_password)
    {
      Swal.fire(
        'Password',
        "Password don't Match ",
        'error'
      )
      return;
    }

    this.http.post<any>(domain_URL+'/user/register',{
      customer_id:this.username,
      password:this.password,
      name:this.name,
      email:this.email,
      mobile_no:this.mobileno,
    }).subscribe({
      next: data => {
          console.log(data)
          // console.log('done');
          if(data['status_code'] == 200)
          {
            Swal.fire(
              'Regisetred!',
              data['message'],
              'success'
            );
          }
          else if(data['status_code']==404)
          {
            Swal.fire(
              'Wrong Information!',
              data['message'],
              'error'
            );
          }
      },
      error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })

  }

}
