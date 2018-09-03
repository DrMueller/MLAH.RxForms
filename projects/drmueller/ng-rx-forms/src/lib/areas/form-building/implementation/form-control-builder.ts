import { FormControl, FormGroup } from '@angular/forms';

import {
  ValidatedControl, ValidationControlErrorsMap, ValidationKeyErrorMap
} from '../../form-validation';
import { IValidator } from '../../validators';
import { IFormControlBuilder, IRxFormBuilder, IValidationKeyErrorMapBuilder } from '..';
import { RxFormBuilder } from './rx-form-builder';
import { ValidationKeyErrorMapBuilder } from './validation-key-error-map-builder';

export class FormControlBuilder<T> implements IFormControlBuilder<T> {
  private defaultValue: any = null;
  private modelPropertyName: keyof T | null = null;
  private validationErrorKeyMaps: ValidationKeyErrorMap[] = [];
  private validators: IValidator[] = [];

  public constructor(
    private controlName: string,
    private controlErrorsMaps: ValidationControlErrorsMap[],
    private formGroup: FormGroup,
    private validatedControls: ValidatedControl<T>[],
    private formBuilder: RxFormBuilder<T>) {
  }

  public buildControl(): IRxFormBuilder<T> {
    this.createAndAddFormControl();
    this.createAndAddValidatedControl();
    this.createAndPushValidationErrorMap();
    return this.formBuilder;
  }

  public withDefaultValue(defaultValue: any): IFormControlBuilder<T> {
    this.defaultValue = defaultValue;
    return this;
  }

  public withModelBinding(propertyName: keyof T): IFormControlBuilder<T> {
    this.modelPropertyName = propertyName;
    return this;
  }

  public withValidation(validator: IValidator): IValidationKeyErrorMapBuilder<T> {
    this.validators.push(validator);
    const validationRuleBuilder = new ValidationKeyErrorMapBuilder(this.validationErrorKeyMaps, validator, this);
    return validationRuleBuilder;
  }

  private createAndAddFormControl(): void {
    const formControl = new FormControl();
    formControl.setValue(this.defaultValue, {
      onlySelf: true
    });

    const validatorFunctions = this.validators.map(f => f.createFunc());
    formControl.setValidators(validatorFunctions);

    this.formGroup.addControl(this.controlName, formControl);
  }

  private createAndAddValidatedControl(): void {
    const validatedControl = new ValidatedControl(this.controlName, this.modelPropertyName);
    this.validatedControls.push(validatedControl);
  }

  private createAndPushValidationErrorMap(): void {
    const va = new ValidationControlErrorsMap(
      this.controlName,
      this.validationErrorKeyMaps);

    this.controlErrorsMaps.push(va);
  }
}
