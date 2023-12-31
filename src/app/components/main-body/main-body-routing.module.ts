import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBodyComponent } from './components/main-body/main-body.component';
 
const routes: Routes = [
  { path: '', component: MainBodyComponent },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainBodyRoutingModule { }