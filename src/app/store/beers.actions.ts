import { createAction, createActionGroup, props } from '@ngrx/store';
import { payloadStatus, IBeer } from '../interfaces/beerInterface';


// export const getBeers = createAction('[BeerListComponent] get Beers');

// export const getBeersSuccess = createAction(
//   '[BeerListComponent] get Beers',
//   props<{ beers: IBeer[], status: payloadStatus.success }>()
// );

// export const getBeersError = createAction(
//   '[BeerListComponent] get Beers',
//   props<{ status: payloadStatus.error, error: 'An error occured while loading the beer list' }>()
// );

export const BeersAction = createActionGroup({
  source: 'Beers',
  events: {
    getBeers: props<{ pStatus: payloadStatus }>(),
    getBeersSuccess: props<{ beers: IBeer[]; pStatus: payloadStatus }>(),
    getBeersError: props<{ pStatus: payloadStatus; error: string }>(),
    addBeer: props<{ bookId: string }>(),
    removeBeer: props<{ bookId: string }>(),
  },
});