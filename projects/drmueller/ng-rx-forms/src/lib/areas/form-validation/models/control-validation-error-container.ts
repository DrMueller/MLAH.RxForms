import { ValidationError } from '.';

// Defines a collection of validation errors for a Control, used by the ValidatedControl-Model
export class ControlValidationErrorContainer {
  private _validationErrors: ValidationError[] = [];

  public get validationErrors(): ValidationError[] {
    return this._validationErrors;
  }

  public setValidationErrors(validationErrors: ValidationError[]) {
    this._validationErrors = validationErrors;
  }
}
