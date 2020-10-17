import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PagesModule } from './pages/pages.module';

//Redux
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducers';
import { effectArray } from './store/effects';
//Services
import { UserService } from './services/user.service';
import { AlertMessageService } from './services/alert-message.service';

import { environment } from 'src/environments/environment';
//Components
import { AppComponent } from './app.component';
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
    MaterialModule,
    PagesModule,
    AppRoutingModule,
    NgxSpinnerModule,
  ],

  providers: [ AlertMessageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
