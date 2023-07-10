import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { payloadStatus, IBeer } from '../interfaces/beerInterface';


export const BeersAction = createActionGroup({
  source: 'Beers',
  events: {
    getBeers: emptyProps(),
    getBeersSuccess: props<{ beers: IBeer[]; pStatus: payloadStatus }>(),
    getBeersError: props<{ pStatus: payloadStatus; error: string }>(),

    addBeer: props<{ data: IBeer }>(),
    addBeerSuccess: props<{ beer: IBeer; pStatus: payloadStatus }>(),
    addBeerError: props<{ pStatus: payloadStatus; error: string }>(),

    removeBeer: props<{ beerId: number }>(),
  },
});