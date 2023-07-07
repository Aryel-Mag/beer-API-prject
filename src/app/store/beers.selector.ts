import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { IPayloadStatus, AppState, IBeer } from '../interfaces/beerInterface';

// export const selectBeers = (state: AppState) => state.beers;

export const selectBeers: MemoizedSelector<AppState, IPayloadStatus> =
  createFeatureSelector<IPayloadStatus>('data');

export const selectAllBeers: MemoizedSelector<AppState, IBeer[]> =
  createSelector(
    selectBeers,
    (state: IPayloadStatus) => state.data
  )

// export const selectAllBeers = createSelector(
//   selectBeers,
//   (state: IPayloadStatus) => state.data
// );