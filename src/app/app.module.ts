import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './components/header/header.module';
import { MainBodyModule } from './components/main-body/main-body.module';
import { FooterModule } from './components/footer/footer.module';


import { StoreModule } from '@ngrx/store';
import { beersReducer } from './store/beers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BeersEffects } from './store/beers.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    MainBodyModule,
    StoreModule.forRoot({ beers: beersReducer }),
    EffectsModule.forRoot([BeersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
