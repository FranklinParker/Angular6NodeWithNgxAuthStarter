import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType} from "@ngrx/effects";
import {AuthActionTypes, LoggedInInfo, Login, Logout} from "./auth.actions";
import { tap } from 'rxjs/operators'
import {Router} from "@angular/router";
import {LoggedInUser} from "./model/loggedInUser";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";


@Injectable()
export class AuthEffects {
  private tokenTimer;

  constructor(private actions$: Actions,
              private router: Router,
              private store: Store<AppState>) {}

  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action =>{
      this.setTokenUser(action.payload)
      this.router.navigate(['/']);

    } )
  );

  @Effect({dispatch:false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(action =>{
      localStorage.clear();
      this.router.navigate(['/login']);

    } )
  );

  /**
   *
   *
   * @param {{token: string; user: LoggedInUser}} result
   */
  private setTokenUser(payload: LoggedInInfo) {
    const currTime =  new Date().getTime();
    this.setAuthTimer(payload.expiresInSeconds * 1000);
    const expiresInTime = currTime + (payload.expiresInSeconds * 1000);
    localStorage.setItem('loggedInUser', JSON.stringify(payload.loggedInUser));
    localStorage.setItem('token', payload.token);
    localStorage.setItem('expiresIn','' + expiresInTime);
  }

  private setAuthTimer(duration: number){
    this.tokenTimer = setTimeout(() => {
      console.log("automatic timeout in store ");
      this.store.dispatch(new Logout());
    }, duration );
  }

}
