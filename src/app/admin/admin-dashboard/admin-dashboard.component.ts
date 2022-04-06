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
  public display_desk = Array();
  public pagination_length=0;
  public starting_current_page=0;
  public displayed_page=0;

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
          this.pagination_length= Math.ceil(this.desk_details.length/10) ;
          this.starting_current_page=1;
          this.displayed_page=1;
          this.display_page(this.starting_current_page);
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

  display_page(page_id:any){
    this.display_desk.length=0
    this.displayed_page=page_id
    // alert(page_id);
    for(let i=(page_id-1)*10;i<this.desk_details.length && i<page_id*10;i++)
    {
      this.display_desk.push(this.desk_details[i]);
    }
  }

  change_pagination(page_id:any){
    // console.log(this.pagination_length)
    if(page_id>0 && page_id+2<=this.pagination_length)
    {
      this.starting_current_page=page_id;
      // this.display_page(this.starting_current_page);
    }
    if(this.starting_current_page>this.displayed_page)
    {
      // this.displayed_page=this.starting_current_page;
      this.display_page(this.starting_current_page);
    }
    if(this.starting_current_page+2<this.displayed_page)
    {
      // this.displayed_page=this.starting_current_page;
      this.display_page(this.starting_current_page+2);
    }
  }

}
