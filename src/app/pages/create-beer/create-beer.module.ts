import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBeerComponent } from './components/create-beer.component';

import { CreateBeerRoutingModule } from './create-beer-routing.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateBeerComponent
  ],
  imports: [
    CommonModule,
    CreateBeerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateBeerModule { }
