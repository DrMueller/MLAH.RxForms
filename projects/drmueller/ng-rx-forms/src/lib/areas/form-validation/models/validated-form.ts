import { ValidatedControl, ValidationError } from './';

export class ValidatedForm<T> {
  public constructor(private validatedControls: ValidatedControl<T>[]) {
  }

  public static createEmpty<T>(): ValidatedForm<T> {
    return new ValidatedForm([]);
  }

  public find(controlName: string): ValidatedControl<T> {
    const controlValidation = this.validatedControls.find(f => f.controlName === controlName);
    if (controlValidation) {
      return controlValidation;
    }

    throw new Error(`Control ${controlName} not found.`);
  }

  public getControlsWithModelBinding(): ValidatedControl<T>[] {
    const result = this.validatedControls.filter(control => {
      return !!control.modelPropertyName;
    });

    return result;
  }

  public setControlValidationErrors(controlName: string, validationErrors: ValidationError[]) {
    const control = this.find(controlName);
    control.setValidationErrors(validationErrors);
  }
}
