import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import HttpService from '../services/HttpService';
import { BeersAction } from './beers.actions';
import { payloadStatus } from '../interfaces/beerInterface';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class BeersEffects {
  loadBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeersAction.getBeers),
      exhaustMap(() => {
        return this._httpService.getBeersAPI().pipe(
          map((beersList) => BeersAction.getBeersSuccess({ beers: beersList, pStatus: payloadStatus.success })),
          catchError(
            () => of(BeersAction.getBeersError({
              pStatus: payloadStatus.error, error: 'An error occurred while loading the beer list'
            }))))
      })
    )
  );

  addBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeersAction.addBeer),
      exhaustMap((payload: any) => {
        return this._httpService.postBeer(payload.beer).pipe(
          map((beer) => BeersAction.addBeerSuccess({ beer, pStatus: payloadStatus.success })),
          catchError(
            () => of(BeersAction.addBeerError({
              pStatus: payloadStatus.error, error: 'An error occurred while loading the beer list'
            }))))
      })
    )
  );

  constructor(private actions$: Actions, private _httpService: HttpService) { }
}
