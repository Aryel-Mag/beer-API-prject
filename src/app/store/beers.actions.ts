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
    'Get Beers': props<{ pStatus: payloadStatus }>(),
    'get Beers Success': props<{ beers: IBeer[], status: payloadStatus }>(),
    'get Beers Error': props<{
      status: payloadStatus, error: string
    }>(),

    'Add Beer': props<{ bookId: string }>(),
    'Remove Beer': props<{ bookId: string }>(),
  },
});