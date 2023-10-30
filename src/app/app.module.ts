import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import{jqxButtonModule} from 'jqwidgets-ng/jqxbuttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,jqxGridModule ,jqxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
