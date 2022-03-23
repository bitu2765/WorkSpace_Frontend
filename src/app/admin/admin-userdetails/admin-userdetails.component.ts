import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-userdetails',
  templateUrl: './admin-userdetails.component.html',
  styleUrls: ['./admin-userdetails.component.css']
})
export class AdminUserdetailsComponent implements OnInit {

  constructor() { }
  // totalLength:any;
  // page:number=1;

  ngOnInit(): void {
    // this.totalLength=result.length;
  }
  sideBarOpen = true;

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
