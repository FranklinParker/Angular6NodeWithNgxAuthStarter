import {createSelector} from '@ngrx/store';

import * as fromContacts from './contact.reducer';


export const selectContactState = state => state.contact;


export const isContactsLoaded = createSelector(
  selectContactState,
  contact => contact.allContactsLoaded
);

export const getAllContacts = createSelector(
  selectContactState,
  fromContacts.selectAll

);


export const selectContactPage = (startRec: number, nbrRecords: number) =>
  createSelector(
    getAllContacts,
    contacts => {
      console.log('contacts', contacts);
      if (!contacts || contacts.length === 0) {
        return {
          contacts: [],
          totalRecords: 0
        }
      } else {
        return {
          contacts: contacts.slice(startRec, nbrRecords),
          totalRecords: contacts.length
        }
      }

    }
  );


