import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  FormValidationService, FormWithValidation, ValidatedControl, ValidatedForm,
  ValidationControlErrorsMap
} from '../../form-validation';
import { IFormControlBuilder, IFormWatchingBuilder, IRxFormBuilder } from '..';
import { FormControlBuilder } from './form-control-builder';
import { FormWatchingBuilder } from './form-watching-builder';

@Injectable()
export class RxFormBuilder<T> implements IRxFormBuilder<T> {
  private controlErrorsMaps: ValidationControlErrorsMap[];
  private formGroup: FormGroup;
  private formValidationService: FormValidationService<T>;
  private validatedControls: ValidatedControl<T>[];

  public constructor(private formBuilder: FormBuilder) {
  }

  public buildForm(): FormWithValidation<T> {
    const validatedForm = new ValidatedForm(this.validatedControls);
    this.formValidationService.initialize(this.formGroup, this.controlErrorsMaps, validatedForm);
    const result = new FormWithValidation(this.formGroup, validatedForm);
    return result;
  }

  public startBuildingFormGroup(): IRxFormBuilder<T> {
    this.formValidationService = new FormValidationService<T>(); // We always want a fresh instance
    this.controlErrorsMaps = [];
    this.validatedControls = [];
    this.formGroup = this.formBuilder.group({});

    return this;
  }

  public withControl(controlName: string): IFormControlBuilder<T> {
    const formControlBuilder = new FormControlBuilder<T>(controlName, this.controlErrorsMaps, this.formGroup, this.validatedControls, this);
    return formControlBuilder;
  }

  public withFormValidationWatcher(): IFormWatchingBuilder<T> {
    const formWatchingBuilder = new FormWatchingBuilder(this.formGroup, this.formValidationService, this);
    return formWatchingBuilder;
  }
}
