import { createReducer, on } from '@ngrx/store';
import { BeersAction } from './beers.actions';
import { IPayloadStatus, payloadStatus } from '../interfaces/beerInterface';

export const initialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

export const collectionReducer = createReducer(
  initialState,
  on(BeersAction.getBeers, (state, { pStatus }) =>
    ({ ...state, pStatus: payloadStatus.loading })
  ),


);