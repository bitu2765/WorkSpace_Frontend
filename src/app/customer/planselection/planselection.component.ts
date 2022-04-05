import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { locations, plans } from 'src/app/app.module';

@Component({
  selector: 'app-planselection',
  templateUrl: './planselection.component.html',
  styleUrls: ['./planselection.component.css']
})
export class PlanselectionComponent implements OnInit {

  public locations =Array();
  public available_plans =Array();
  public searchlocation =``;
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

  SendLocationtoFunction(event: any) {
    this.searchlocation=event.target.value
    this.http.get<any>(plans+'/'+this.searchlocation,).subscribe({
      next: data => {
        console.log(data)
        if (data['status_code'] == 200) {
          this.available_plans = data['Location_plans'];
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
