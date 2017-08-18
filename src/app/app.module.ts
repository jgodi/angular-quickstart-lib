import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule } from '../platform';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, LibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
