import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlansComponent } from './plans/plans.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerModule } from './customer/customer.module';
import { FormsModule } from '@angular/forms';
import { UserauthGuard } from './Authentication/user/userauth.guard';
import { AdminModule } from './admin/admin.module';
import { AdminauthGuard } from './Authentication/admin/adminauth.guard';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';


export const domain_name ="localhost";

export const domain_URL =  "http://"+domain_name+":5000"
export const admin_verify =  domain_URL + "/admin/verify"
export const user_verify =  domain_URL + "/user/verify"
export const login =  domain_URL + "/login"
export const logout =  domain_URL + "/logout"
export const plans =  domain_URL + "/plans"
export const user_register =  domain_URL + "/user/register"
export const locations =  domain_URL + "/locations"


export const admin_profile =  domain_URL + "/admin/profile"
export const admin_user_details =  domain_URL + "/admin/user_details"
export const admin_desk_details =domain_URL+'/admin/desk_details'


export const user_desk_details =domain_URL+'/user/desk_details'
export const user_profile =  domain_URL + "/user/profile"
export const user_plan_purchase =domain_URL+'/user/purchase_plan'
export const user_active_plan =  domain_URL + "/user/active_plan"
export const user_upcoming_plan =  domain_URL + "/user/upcoming_plan"
export const user_purchase_history =  domain_URL + "/user/purchase_history"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AboutusComponent,
    PlansComponent,

    
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    CustomerModule,
    FormsModule,
    SweetAlert2Module,
    BrowserAnimationsModule,
    SlickCarouselModule,
    
  ],
  providers: [
    UserauthGuard,
    AdminauthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

