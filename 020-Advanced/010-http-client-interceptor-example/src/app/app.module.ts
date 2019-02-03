import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TestInterceptor } from './http-interceptors/test-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [
	[{ provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
