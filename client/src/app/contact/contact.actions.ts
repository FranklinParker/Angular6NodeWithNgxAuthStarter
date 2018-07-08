import { Action } from '@ngrx/store';

export enum ContactActionTypes {
  LoadAllContactsAction = '[LoadAllContactsAction] Load Contacts'
}

export class LoadAllContacts implements Action {
  readonly type = ContactActionTypes.LoadAllContactsAction;
}

export type ContactActions = LoadAllContacts;
