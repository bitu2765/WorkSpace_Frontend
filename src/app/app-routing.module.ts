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
 
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminPlansComponent } from './admin/admin-plans/admin-plans.component';
import { AdminUserdetailsComponent } from './admin/admin-userdetails/admin-userdetails.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminSlotDetailsComponent } from './admin/admin-slot-details/admin-slot-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

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
  },
  {path: 'admin', children: [
    {path: '', component:AdminDashboardComponent},
    {path: 'dashboard', component:AdminDashboardComponent},
    {path: 'home', component:AdminHomeComponent},
    {path: 'plans', component:AdminPlansComponent},
    {path: 'userdetails', component:AdminUserdetailsComponent},
    {path: 'sidenav' , component:AdminSidenavComponent},
    {path: 'slot-details', component:AdminSlotDetailsComponent},
  ]}
]

// const routes: Routes = [
//   {path:'',component:LoginComponent },
//   {path: 'login', component:LoginComponent},
//   {path: 'register', component:RegisterComponent},
//   {path: 'home', component:HomeComponent},
//   {path: 'aboutus', component:AboutusComponent},
//   {path: 'plans', component:PlansComponent},
  
  
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }
