import { Lib2Module } from 'lib2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
