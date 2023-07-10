import { createReducer, on } from '@ngrx/store';
import { BeersAction } from './beers.actions';
import { IPayloadStatus, payloadStatus } from '../interfaces/beerInterface';

export const initialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

export const beersReducer = createReducer(
  initialState,
  on(BeersAction.getBeers, (state, { }) =>
    ({ ...state, pStatus: payloadStatus.loading })
  ),

  on(BeersAction.getBeersSuccess, (state, { beers, pStatus }) => ({ ...state, data: beers, pStatus: pStatus })
  ),

  on(BeersAction.getBeersError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occured while loading the beer list', pStatus: pStatus })
  ),

  on(BeersAction.addBeer, (state, { }) => ({ ...state, pStatus: payloadStatus.loading })),

  on(BeersAction.addBeerSuccess, (state, { beer, pStatus }) => ({ ...state, pStatus: pStatus, beer: beer })),

  on(BeersAction.addBeerError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occured while adding the beer', pStatus: pStatus })
  )

);