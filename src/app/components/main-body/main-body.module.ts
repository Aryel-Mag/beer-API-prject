import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './components/main-body/main-body.component';

import { MainBodyRoutingModule } from './main-body-routing.module';


@NgModule({
  declarations: [
    MainBodyComponent
  ],
  imports: [
    CommonModule,
    MainBodyRoutingModule
  ],
  exports: [
    MainBodyComponent
  ]
})
export class MainBodyModule { }
