import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RxFormsModule } from 'projects/drmueller/ng-rx-forms/src/public_api';

import * as services from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    RxFormsModule.forRoot()
  ],
  providers: [
    services.IndividualFormBuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
