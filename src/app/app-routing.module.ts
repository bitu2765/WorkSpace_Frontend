import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserauthGuard } from './Authentication/user/userauth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent },
  {path: 'login-component', component:LoginComponent},
  {path: 'register-component', component:RegisterComponent},
  {path: 'home-component', component:HomeComponent},
  {path: 'aboutus-component', component:AboutusComponent},
  {path: 'plans-component', component:PlansComponent,canActivate:[UserauthGuard]},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
