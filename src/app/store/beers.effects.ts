import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from '../services/HttpService';
import { BeersAction } from './beers.actions';
import { payloadStatus } from '../interfaces/beerInterface';
import { catchError } from 'rxjs';

@Injectable()
export class BeersEffects {

  loadBeers$ = createEffect(() => this.actions$.pipe(
    ofType(BeersAction.getBeers),
    this._httpService.getBeersAPI().pipe(
      map(() => this.loadBeers$({ type: BeersAction.getBeersSuccess, pStatus: payloadStatus.success })),
      catchError((error) => of(this.loadBeers$({ type: BeersAction.getBeersError, error, pStatus: payloadStatus.error)
      )
      )
    );

  constructor(
    private actions$: Actions,
    private _httpService: HttpService
  ) { }
}