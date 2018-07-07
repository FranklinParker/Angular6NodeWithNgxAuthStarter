import { Action } from '@ngrx/store';
import {LoggedInUser} from "./model/loggedInUser";

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action'
}

export class Login implements Action {

  constructor(public payload: { loggedInUser: LoggedInUser, token: string }){

  }
  readonly type = AuthActionTypes.LoginAction;
}

export class Logout implements Action {

  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
