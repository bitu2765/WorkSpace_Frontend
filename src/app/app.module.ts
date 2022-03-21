import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{ MatButtonModule} from '@angular/material/button';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlansComponent } from './plans/plans.component'
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from './customer/customer.module';
import { FormsModule } from '@angular/forms';


export const domain_URL =  "http://localhost:5000"

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
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    CustomerModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
