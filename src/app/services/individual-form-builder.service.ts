import { Injectable } from '@angular/core';

import {
     FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'projects/drmueller/ng-rx-forms/src/public_api';
import { Individual } from '../models';

@Injectable()
export class IndividualFormBuilderService {

  constructor(
    private formBuilder: RxFormBuilder<Individual>,
    private validatorFactory: ValidatorFactoryService
  ) { }

  public buildForm(): FormWithValidation<Individual> {
    return this.formBuilder.startBuildingFormGroup()
      .withControl('firstName')
      .withModelBinding('firstName')
      .withValidation(this.validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('lastName')
      .withModelBinding('lastName')
      .withValidation(this.validatorFactory.minLength(5))
      .buildValidationKeyErrorMap()
      .buildControl()
      .withControl('birthDate')
      .withModelBinding('birthDate')
      .withDefaultValue(new Date(1986, 12, 29))
      .buildControl()
      .withControl('height')
      .withModelBinding('height')
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
