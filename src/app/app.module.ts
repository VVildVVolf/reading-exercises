import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainReplacerComponent } from './main-replacer/main-replacer.component';

import { FormsModule }   from '@angular/forms';

import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    MainReplacerComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
