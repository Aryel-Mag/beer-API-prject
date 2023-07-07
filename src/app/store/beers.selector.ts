import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, IPayloadStatus, IBeer } from '../interfaces/beerInterface';

export const selectBeersState = createFeatureSelector<AppState>('beers');

export const selectAllBeers = createSelector(
  selectBeersState,
  (state: AppState) => state.beers.data
);