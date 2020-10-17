import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

import { appReducer } from './store/app.reducers';
import { effectArray } from './store/effects';
//Services
import { InvoicesService } from './services/invoices.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production
    }),
    EffectsModule.forRoot(effectArray),
    PagesModule,
    AppRoutingModule
  ],
  providers: [ InvoicesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
