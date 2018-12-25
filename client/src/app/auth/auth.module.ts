import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from "../shared/shared.module";
import { SignupComponent } from './components/signup/signup.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    UpdateUserComponent
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    UpdateUserComponent
  ]
})
export class AuthModule { }
