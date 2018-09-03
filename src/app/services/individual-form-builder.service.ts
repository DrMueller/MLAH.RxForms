import { Injectable } from '@angular/core';

import {
    FormValidationService, FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'projects/drmueller/ng-rx-forms/src/public_api';

@Injectable()
export class IndividualFormBuilderService {

  constructor(
    private formValidationService: FormValidationService,
    private formBuilder: RxFormBuilder,
    private validatorFactory: ValidatorFactoryService
  ) { }

  public buildForm(): FormWithValidation {
    return this.formBuilder.startBuildingFormGroup(this.formValidationService)
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
      .withDefaultValue(new Date(1986, 12, 29))
      .buildControl()
      .withControl('height')
      .withDefaultValue(180)
      .buildControl()
      .withFormValidationWatcher()
      .withDebounceTime(500)
      .buildFormWatcher()
      .buildForm();
  }
}
