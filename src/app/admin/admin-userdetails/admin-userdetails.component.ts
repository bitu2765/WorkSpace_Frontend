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


  public displayed_user_details = Array();
  public displayed_page = 1;
  public starting_current_page = 1;
  public max_page = 1;
  public user_per_page = [5,10,15,20,25];
  public per_page_ind = 0;
  public search_tag=``;


  constructor(private http: HttpClient, private _router: Router) {

    this.retrive_user_details();
  }

  ngOnInit(): void {
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  set_user_per_page(event: any) {
    console.log(event.target.value);
    this.per_page_ind = event.target.value;
    this.retrive_user_details();

  }
  set_starting_page(page_id:any)
  {
    if(page_id>=1 && page_id+2<=this.max_page)
    {
      this.starting_current_page=page_id;
    }
    if(this.displayed_page<this.starting_current_page)
    {
      this.displayed_page =this.starting_current_page;
    }
    if(this.displayed_page>this.starting_current_page+2)
    {
      this.displayed_page=this.starting_current_page+2;
    }
  }

  display_page(page_id:any)
  {
    this.displayed_page = page_id;
    this.retrive_user_details();
  }

  retrive_user_details() {
    console.log(this.search_tag);

    this.http.get<any>(admin_user_details,
      {
        // headers:headers,withCredentials:true,responseType:'json',
        params: { page: this.displayed_page, per_page: this.user_per_page[this.per_page_ind],search_tag:this.search_tag }
      }
    ).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.displayed_user_details = data['customers'];
          this.max_page = data['paginate']['pages'];  
          this.displayed_page = data['paginate']['page'];
          if(this.displayed_page-2<=0)
          {
            this.starting_current_page=1;
          }
          else
          {
            this.starting_current_page=this.displayed_page-2;
          }
          if(this.displayed_page>this.max_page)
          {
            this.displayed_page=this.max_page;
            this.retrive_user_details();
          }
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

  search_text(event:any)
  {
    if(event.key == 'Enter')
    {
      console.log(event.target.value);
      this.search_tag = event.target.value;
      this.retrive_user_details();
    }
  }

}
