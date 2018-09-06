import { ControlValidationErrorContainer } from './control-validation-error-container';
import { ValidationError } from './validation-error';

export class ValidatedControl<T> {
  private _errorContainer = new ControlValidationErrorContainer();

  public constructor(public controlName: string, public modelPropertyName: keyof T | null) {
  }

  public get errorContainer(): ControlValidationErrorContainer {
    return this._errorContainer;
  }

  public get hasErrors(): boolean {
    return this.errorContainer.validationErrors.length > 0;
  }

  public static create<T>(controlName: string, modelPropertyName: keyof T | null = null): ValidatedControl<T> {
    return new ValidatedControl(controlName, modelPropertyName);
  }

  public setValidationErrors(validationErrors: ValidationError[]) {
    this._errorContainer.setValidationErrors(validationErrors);
  }
}
