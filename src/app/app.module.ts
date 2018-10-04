import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainReplacerComponent } from './main-replacer/main-replacer.component';

import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CustomSpinnerComponent } from './custom-spinner/custom-spinner.component';
import { SpinnedTextComponent } from './spinned-text/spinned-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MainReplacerComponent,
    CustomSpinnerComponent,
    SpinnedTextComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
