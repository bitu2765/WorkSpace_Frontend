import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminPlansComponent } from './admin-plans/admin-plans.component';
import { AdminUserdetailsComponent } from './admin-userdetails/admin-userdetails.component';
import { AdminSlotDetailsComponent } from './admin-slot-details/admin-slot-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminBookingDetailsComponent } from './admin-booking-details/admin-booking-details.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminSidenavComponent,
    AdminPlansComponent,
    AdminUserdetailsComponent,
    AdminSlotDetailsComponent,
    AdminComponent,
    AdminBookingDetailsComponent,
  ],
  imports: [
    CommonModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgxPaginationModule,
    // MatGridList
    RouterModule,
    
  ]
})
export class AdminModule { 
}
