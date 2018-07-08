import { Action } from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Contact} from "./model/contact";


export interface ContactState extends EntityState<Contact> {

  allContactsLoaded:boolean;

}

export const adapter : EntityAdapter<Contact> =
  createEntityAdapter<Contact>();



export const initialState: ContactState = adapter.getInitialState({
  allContactsLoaded: false
});

export function reducer(state = initialState, action: Action): ContactState {
  switch (action.type) {

    default:
      return state;
  }
}
