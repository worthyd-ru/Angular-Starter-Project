import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from './settings.state';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions, private store: Store<State>) {}
}
