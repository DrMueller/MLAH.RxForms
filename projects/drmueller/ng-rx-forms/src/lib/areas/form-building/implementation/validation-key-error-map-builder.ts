import { ValidationError, ValidationKeyErrorMap } from '../../form-validation';
import { IValidator } from '../../validators';
import { IFormControlBuilder, IValidationKeyErrorMapBuilder } from '..';

export class ValidationKeyErrorMapBuilder<T> implements IValidationKeyErrorMapBuilder<T> {
  private _customErrorMessage: string | null = null;

  constructor(
    private keyErrorMaps: ValidationKeyErrorMap[],
    private validator: IValidator,
    private formControlBuilder: IFormControlBuilder<T>) {
  }

  public withCustomErrorMessage(errorMessage: string): IValidationKeyErrorMapBuilder<T> {
    this._customErrorMessage = errorMessage;
    return this;
  }

  public buildValidationKeyErrorMap(): IFormControlBuilder<T> {
    const errorMessage = this.getErrorMessage();
    const keyErrorMap = new ValidationKeyErrorMap(this.validator.key, new ValidationError(errorMessage));

    this.keyErrorMaps.push(keyErrorMap);
    return this.formControlBuilder;
  }

  private getErrorMessage(): string {
    let result: string;

    if (this._customErrorMessage !== null) {
      result = this._customErrorMessage;
    } else {
      result = this.validator.defaultErrorMessage;
    }

    return result;
  }
}
