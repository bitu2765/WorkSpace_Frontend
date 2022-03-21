import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    HistoryComponent,
    CustomerNavbarComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class CustomerModule { }
