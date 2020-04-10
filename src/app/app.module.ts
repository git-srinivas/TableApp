import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTableModule } from './components/table/table-module';
import { TableExampleComponent } from './examples/table-example/table-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TableExampleComponent
  ],
  imports: [
    BrowserModule,
    MyTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
