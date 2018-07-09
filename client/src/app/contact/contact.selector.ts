import {createSelector} from '@ngrx/store';


export const selectContactState = state => state.contact;


export const isContactsLoaded = createSelector(
  selectContactState,
  contact => contact.allContactsLoaded
);
