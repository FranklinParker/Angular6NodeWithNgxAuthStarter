import {createSelector} from '@ngrx/store';


export const selectContactState = state => state.contact;


export const contactsLoaded = createSelector(
  selectContactState,
  contact => contact.allContactsLoaded
);
