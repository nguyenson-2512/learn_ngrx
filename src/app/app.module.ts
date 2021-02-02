import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'
import { reducer } from '../reducers/tutorial.reduce';
import { CreateComponent } from './create/create.component'
import { ReadComponent } from './read/read.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
