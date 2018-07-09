import { Action } from '@ngrx/store';
import {Contact} from "./model/contact";

export enum ContactActionTypes {
  LoadAllContactsAction = '[LoadAllContactsAction] Load Contacts',
  ContactsLoadedAction = '[ContactsLoaded] Contacts Loaded'

}

export class LoadAllContacts implements Action {
  readonly type = ContactActionTypes.LoadAllContactsAction;

}

export class ContactsLoaded implements Action {
  readonly type = ContactActionTypes.ContactsLoadedAction;
  constructor(public payload: { contacts:Contact[]}){

  }
}



export type ContactActions = LoadAllContacts | ContactsLoaded;
