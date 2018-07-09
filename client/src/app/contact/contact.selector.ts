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


export const selectContactPage =  (page: number, nbrRecords: number) =>
  createSelector(
    getAllContacts,
    contacts => {
      if (!contacts || contacts.length === 0) {
        return {
          contacts: [],
          totalRecords: 0
        }
      } else {
        const start = page*nbrRecords;
        const end = start + nbrRecords;

        return {
          contacts: contacts.slice(start,end),
          totalRecords: contacts.length
        }
      }

    }
  );


