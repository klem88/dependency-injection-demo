import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Widget1Component } from './components/widget1/widget1.component';
import { Widget2Component } from './components/widget2/widget2.component';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, Widget1Component, Widget2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
