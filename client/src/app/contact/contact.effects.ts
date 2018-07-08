import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from "rxjs/operators";
import {ContactActionTypes, LoadAllContacts} from "./contact.actions";
import {container} from "@angular/core/src/render3/instructions";


@Injectable()
export class ContactEffects {
  @Effect({dispatch: false})
  contactLoad$ = this.actions$.pipe(
    ofType<LoadAllContacts>(ContactActionTypes.LoadAllContactsAction),
    tap(action => {
      console.log('contact load', action);
    })
  );
  constructor(private actions$: Actions) {}
}
