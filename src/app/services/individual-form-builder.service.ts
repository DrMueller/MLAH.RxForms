import { Injectable } from '@angular/core';

import { nameof } from '@drmueller/language-extensions';

import {
    FormValidationService, FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'projects/drmueller/ng-rx-forms/src/public_api';
import { Individual } from '../models';

@Injectable()
export class IndividualFormBuilderService {

  constructor(
    private formValidationService: FormValidationService,
    private formBuilder: RxFormBuilder,
    private validatorFactory: ValidatorFactoryService
  ) { }

  public buildForm(): FormWithValidation {
    return this.formBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl(nameof<Individual>('firstName'))
      .withModelBinding(nameof<Individual>('firstName'))
      .withValidation(this.validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('lastName')
      .withModelBinding('lastName')
      .withValidation(this.validatorFactory.minLength(5))
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('birthDate')
      .withDefaultValue(new Date(1986, 12, 29))
      .buildControl()
      .withControl('height')
      .withDefaultValue(180)
      .withValidation(this.validatorFactory.numeric())
      .withCustomErrorMessage('value not numeric!')
      .buildValidationKeyErrorMap()
      .buildControl()
      .withFormValidationWatcher()
      .withDebounceTime(500)
      .buildFormWatcher()
      .buildForm();
  }
}
