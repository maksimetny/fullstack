import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ng2-tooltip-directive';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

import { CitizenListAdapter } from './adapters/citizen-list.adapter';
import { CitizenGroupTypeAdapter } from './adapters/citizen-group-type.adapter';

@NgModule({
  declarations: [AppComponent],
  providers: [AppService, CitizenListAdapter, CitizenGroupTypeAdapter],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    TooltipModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
