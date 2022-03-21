import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ProfileComponent } from './customer/profile/profile.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { HistoryComponent } from './customer/history/history.component';
import { BookingComponent } from './customer/booking/booking.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'aboutus-component', component: AboutusComponent },
  { path: 'plans-component', component: PlansComponent },

  {
    path: 'customer', children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'booking', component: BookingComponent }
    ]
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
