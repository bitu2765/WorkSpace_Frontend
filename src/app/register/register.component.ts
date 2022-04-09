import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { user_register } from '../app.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public username = ``;
  public mobileno = ``;
  public password = ``;
  public email = ``;
  public confirm_password = ``;
  public name = ``;

  constructor(private http: HttpClient, private _router: Router) {
  }

  ngOnInit(): void {
  }

  user_registration() {

    if (this.mobileno.length != 10) {
      Swal.fire(
        'Mobile No',
        'Mobile No is Incorrect',
        'error'
      )
      return;
    }
    if (this.password != this.confirm_password) {
      Swal.fire(
        'Password',
        "Password don't Match ",
        'error'
      )
      return;
    }

    Swal.showLoading();

    this.http.post<any>(user_register, {
      customer_id: this.username,
      password: this.password,
      name: this.name,
      email: this.email,
      mobile_no: this.mobileno,
    }).subscribe({
      next: data => {
        if(Swal.isLoading())Swal.hideLoading()
        console.log(data)
        // console.log('done');
        if (data['status_code'] == 200) {
          Swal.fire(
            'Regisetred!',
            data['message'],
            'success'
          );
        }
        else if (data['status_code'] == 404) {
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

  public login() {
    this._router.navigate(['login']);
  }

}
