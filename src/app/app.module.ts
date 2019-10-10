import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { users } from './interfaces.modules';
import { WsHeader }  from './app.header';
import { AppComponent }  from './app.component';
import { boardsOverview }  from './app.boardsOverview';
import { CardsGrouping }  from './app.grouping';
import { routers }  from './app.routing';
@NgModule({
  imports:      [ BrowserModule,routers ],
  declarations: [ AppComponent,WsHeader,CardsGrouping,boardsOverview ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
