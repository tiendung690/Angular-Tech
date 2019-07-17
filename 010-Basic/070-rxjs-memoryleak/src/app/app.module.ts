import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsMemoryleakComponent } from './rxjs-memoryleak/rxjs-memoryleak.component';
import { RxjsMemoryleakFixTakeutilComponent } from './rxjs-memoryleak-fix-takeutil/rxjs-memoryleak-fix-takeutil.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsMemoryleakComponent,
    RxjsMemoryleakFixTakeutilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
