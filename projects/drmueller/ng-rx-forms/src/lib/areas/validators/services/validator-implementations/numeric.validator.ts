import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';

import { IValidator, IValidatorFunctionResult } from '..';

export class NumericValidator implements IValidator {
  public static key = 'numeric';

  public createFunc(): ValidatorFn {
    return (c: AbstractControl): IValidatorFunctionResult => {
      let result: any = null;

      if (isNaN(Number(c.value))) {
        result = {};
        result[this.key] = true;
      }

      return result;
    };
  }

  public get defaultErrorMessage(): string {
    return `Value is not numeric.`;
  }

  public initialize() {
  }

  public get key(): string {
    return NumericValidator.key;
  }
}
