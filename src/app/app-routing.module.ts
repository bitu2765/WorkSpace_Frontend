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
import { AdminauthGuard } from './Authentication/admin/adminauth.guard';
import { PlanselectionComponent } from './customer/planselection/planselection.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
      { path: 'booking', component: PlanselectionComponent,canActivate:[UserauthGuard] }
    ]
  },
  {path: 'admin', children: [
    {path: '', component:AdminDashboardComponent,canActivate:[AdminauthGuard]},
    {path: 'dashboard', component:AdminDashboardComponent,canActivate:[AdminauthGuard]},
    {path: 'profile', component:AdminHomeComponent,canActivate:[AdminauthGuard]},
    {path: 'plans', component:AdminPlansComponent,canActivate:[AdminauthGuard]},
    {path: 'userdetails', component:AdminUserdetailsComponent,canActivate:[AdminauthGuard]},
    {path: 'sidenav' , component:AdminSidenavComponent,canActivate:[AdminauthGuard]},
    {path: 'slot-details', component:AdminSlotDetailsComponent,canActivate:[AdminauthGuard]},
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
