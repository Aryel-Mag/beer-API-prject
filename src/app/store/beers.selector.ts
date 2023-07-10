import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, IPayloadStatus, IBeer } from '../interfaces/beerInterface';

export const selectBeersState: MemoizedSelector<any, IPayloadStatus> = createFeatureSelector<IPayloadStatus>('beers');

export const selectAllBeers = createSelector(
  selectBeersState,
  ({ data }: IPayloadStatus) => data ? data : []
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