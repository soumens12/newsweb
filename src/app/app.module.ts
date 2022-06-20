import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import {NewsapiserviceService} from './service/newsapiservice.service';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { TechnewsComponent } from './technews/technews.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    SportnewsComponent,
    BusinessnewsComponent,
    EntertainmentnewsComponent,
    TechnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
