import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, IPayloadStatus, IBeer } from '../interfaces/beerInterface';

export const selectBeersState = createFeatureSelector<AppState>('beers');
console.log('selector beers', selectBeersState);

export const selectAllBeers = createSelector(
  selectBeersState,
  (state: AppState) => {
    console.log(state);
    return state.beers ? state.beers.data : [];
  }
);




/*
export const selectMessagesFeature: MemoizedSelector<AppState, MessagesState> =
  createFeatureSelector<MessagesState>('messages');

export const selectMessages: MemoizedSelector<AppState, Message[]> = 
createSelector(
  selectMessagesFeature,
  ({ entities }: MessagesState): Message[] => 
    Object.values(entities) as Message[]
);
*/