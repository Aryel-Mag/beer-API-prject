import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBeerComponent } from './components/create-beer.component';

const routes: Routes = [
  { path: '', component: CreateBeerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBeerRoutingModule { }