import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from "../shared/shared.module";
import { SignupComponent } from './components/signup/signup.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('auth', fromAuth.reducer)
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
