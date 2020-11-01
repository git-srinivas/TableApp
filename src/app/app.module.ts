import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyTableModule } from './components/table/table-module';
import { TableExampleComponent } from './examples/table-example/table-example.component';
import { ChildComponent } from './examples/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TableExampleComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    MyTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
