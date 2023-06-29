import { Component, OnInit } from '@angular/core';

import { IBeer } from '../../../interfaces/beerInterface'

import HttpService from '../../../services/HttpService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  public list$!: Observable<IBeer[]>;

  constructor(private readonly _beerList: HttpService) { }

  ngOnInit() {
    this.list$ = this._beerList.getBeersAPI();

  }
}
