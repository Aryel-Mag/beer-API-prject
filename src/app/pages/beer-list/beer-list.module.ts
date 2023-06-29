import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BeerListComponent } from './components/beer-list.component';

import { BeerListRoutingModule } from './beer-list-routing.module';


@NgModule({
  declarations: [
    BeerListComponent
  ],
  imports: [
    CommonModule,
    BeerListRoutingModule
  ]
})
export class BeerListModule { }
