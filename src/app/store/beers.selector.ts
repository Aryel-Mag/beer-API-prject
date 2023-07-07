import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { IPayloadStatus, AppState, IBeer } from '../interfaces/beerInterface';

// export const selectBeers = (state: AppState) => state.beers;

export const selectBeers = createFeatureSelector<AppState>('beers');

export const selectAllBeers =
  createSelector(
    selectBeers,
    (state: AppState) => state.beers.data
  )

// export const selectAllBeers = createSelector(
//   selectBeers,
//   (state: IPayloadStatus) => state.data
// );