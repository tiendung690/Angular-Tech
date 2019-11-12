import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Module1Module } from './module1/module1.module';
import { Module1RotuingModule } from './module1/module1-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    Module1Module,
    Module1RotuingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
