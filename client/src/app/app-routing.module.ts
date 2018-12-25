import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {SignupComponent} from "./auth/components/signup/signup.component";
import {HomeComponent} from "./core/components/home/home.component";
import {AuthGuard} from "./auth/service/auth.guard";
import {ContactMainComponent} from "./contact/components/contact-main/contact-main.component";
import {UpdateUserComponent} from './auth/components/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: SignupComponent

  },
  {
    path:'updateuser',
    component: UpdateUserComponent,
    canActivate: [AuthGuard]


  },
  {
    path:'contact',
    component: ContactMainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
