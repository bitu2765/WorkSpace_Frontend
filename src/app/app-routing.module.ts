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
import { UserauthGuard } from './Authentication/user/userauth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'plans', component: PlansComponent },

  {
    path: 'customer', children: [
      { path: '', component: DashboardComponent,canActivate:[UserauthGuard] },
      { path: 'dashboard', component: DashboardComponent,canActivate:[UserauthGuard] },
      { path: 'profile', component: ProfileComponent,canActivate:[UserauthGuard] },
      { path: 'history', component: HistoryComponent,canActivate:[UserauthGuard] },
      { path: 'booking', component: BookingComponent,canActivate:[UserauthGuard] }
    ]
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
