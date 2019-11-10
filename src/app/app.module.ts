import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTableModule } from './table/table-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
