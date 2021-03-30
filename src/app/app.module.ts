import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { KeysPipe } from './common/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
