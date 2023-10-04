import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestSignalsComponent } from './test-signals.component';
import { TestEffectsAndComputedComponent } from './test-effects-and-computed.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSignalsComponent,
    TestEffectsAndComputedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
