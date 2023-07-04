import { createReducer, on } from '@ngrx/store';
import { getBeers } from './store.actions';
import { IBeerRaw, IBeer } from '../interfaces/beerInterface'

export const initialState: ReadonlyArray<string> = [];

export const storeReducer = createReducer(
  initialState,
  on(getBeers, (state) => state)
);