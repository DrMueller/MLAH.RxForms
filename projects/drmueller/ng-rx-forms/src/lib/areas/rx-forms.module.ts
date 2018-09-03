import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationService } from './form-validation';
import { RxFormBuilder } from './form-building';
import { ValidatorFactoryService } from './validators';
import { ValidatorProviderFactory } from './validators/provisioning';

import * as comp from './form-validation/components';

import {
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';


@NgModule({
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    comp.FormValidationErrorDisplayComponent,
    comp.FormControlWithValidationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    comp.FormValidationErrorDisplayComponent,
    comp.FormControlWithValidationComponent
  ]
})

export class RxFormsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RxFormsModule,
      providers: [
        ValidatorProviderFactory.ValidatorProviders,
        RxFormBuilder,
        FormValidationService,
        ValidatorFactoryService
      ]
    };
  }
}
