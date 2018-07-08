import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {ofType} from "@ngrx/effects";
import {AuthActionTypes, LoggedInInfo, Login, Logout} from "./auth.actions";
import {tap} from 'rxjs/operators'
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {isLoggedOut, selectLoggedInUser} from "./auth.selector";
import {catchError, filter, map, mergeMap, withLatestFrom} from "rxjs/internal/operators";
import { throwError} from "rxjs/index";


@Injectable()
export class AuthEffects {

  @Effect()
  attemptLogin$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.AttemptLoginAction),
    withLatestFrom(this.store.pipe(select(isLoggedOut))),
    filter(([action, isLoggedOut]) => isLoggedOut),
    map(result => {
      console.log('got to attempt login', result);
      return new Logout();
    }),
    catchError(err => {
      console.log('error loading course ', err);
      return throwError(err);
    })
  );
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => {
      this.setTokenUser(action.payload)
      this.router.navigate(['/']);

    })
  );
  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(action => {
      localStorage.clear();
      this.router.navigate(['/login']);

    })
  );
  private tokenTimer;

  constructor(private actions$: Actions,
              private router: Router,
              private store: Store<AppState>) {
  }

  /**
   *
   *
   * @param {{token: string; user: LoggedInUser}} result
   */
  private setTokenUser(payload: LoggedInInfo) {
    const currTime = new Date().getTime();
    this.setAuthTimer(payload.expiresInSeconds * 1000);
    const expiresInTime = currTime + (payload.expiresInSeconds * 1000);
    localStorage.setItem('loggedInUser', JSON.stringify(payload.loggedInUser));
    localStorage.setItem('token', payload.token);
    localStorage.setItem('expiresIn', '' + expiresInTime);
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      console.log("automatic timeout in store ");
      this.store.dispatch(new Logout());
    }, duration);
  }

}
