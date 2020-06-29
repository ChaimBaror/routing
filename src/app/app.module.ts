import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './compns/c1/c1.component';
import { C2Component } from './compns/c2/c2.component';
import { C3Component } from './compns/c3/c3.component';
import { NewsComponent } from './compns/news/news.component';
import { AbputComponent } from './compns/abput/abput.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    NewsComponent,
    AbputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
