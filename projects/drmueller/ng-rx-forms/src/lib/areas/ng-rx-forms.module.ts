import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as formBuilding from './form-building/implementation';
import { ValidatorFactoryService } from './validators/services';

import * as comp from './form-validation/components';

import {
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  exports: [
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

export class NgRxFormsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgRxFormsModule,
      providers: [
        // validatorsProvisioning.ValidatorProviderFactory.ValidatorProviders,
        formBuilding.RxFormBuilder,
        ValidatorFactoryService
      ]
    };
  }
}
