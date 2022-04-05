import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { BookingComponent } from './booking/booking.component';
import { PlanselectionComponent } from './planselection/planselection.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    HistoryComponent,
    CustomerNavbarComponent,
    BookingComponent,
    PlanselectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
  ],
})
export class CustomerModule { }
