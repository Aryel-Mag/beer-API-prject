import { Component, OnInit, OnDestroy } from '@angular/core';

import { IBeer } from '../../../interfaces/beerInterface'

import HttpService from '../../../services/HttpService';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllBeers } from 'src/app/store/beers.selector';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  public list$!: Observable<IBeer[]>;
  public allBeers$!: Observable<IBeer[]>;

  constructor(
    private readonly _beerList: HttpService,
    private readonly _store: Store,
    // private readonly _route: Router
  ) { }

  ngOnInit() {
    this.allBeers$ = this._store.select(selectAllBeers);
    console.log(this.allBeers$);
    // this.list$ = this._beerList.getBeersAPI();
  }


  deleteBeer(event: Event) {
    // this._route.navigate(['/beer-list']);
    let cardId = (event.target as HTMLButtonElement).id;
    this._beerList.deleteBeer(parseInt(cardId));
    // location.reload();
  }

  // ngOnDestroy(){this._beerList.unsubscribe();}
}
