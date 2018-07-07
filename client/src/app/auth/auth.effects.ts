import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ofType} from "@ngrx/effects";
import {AuthActionTypes, Login, Logout} from "./auth.actions";
import { tap } from 'rxjs/operators'
import {Router} from "@angular/router";


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private router: Router) {}

  @Effect({dispatch:false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action =>{
      console.log('got effects: payload', action.payload);
      localStorage.setItem("testUser", JSON.stringify(action.payload.loggedInUser))

    } )
  );

  @Effect({dispatch:false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(action =>{
      console.log('got effects: logout');
      localStorage.clear();
      this.router.navigate(['/login']);

    } )
  );

}
