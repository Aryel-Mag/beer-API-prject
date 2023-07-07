import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, IPayloadStatus, IBeer } from '../interfaces/beerInterface';

export const selectBeersState: MemoizedSelector<AppState, IPayloadStatus[]> = createFeatureSelector<IPayloadStatus>('data');

export const selectAllBeers: MemoizedSelector<AppState, IBeer[]> = createSelector(
  selectBeersState,
  (state: IPayloadStatus) => { console.log(state); return state.data }
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