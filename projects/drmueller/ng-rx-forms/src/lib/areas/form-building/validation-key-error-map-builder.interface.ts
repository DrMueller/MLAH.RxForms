import { IFormControlBuilder } from '.';

export interface IValidationKeyErrorMapBuilder<T> {
  buildValidationKeyErrorMap(): IFormControlBuilder<T>;
  withCustomErrorMessage(errorMessage: string): IValidationKeyErrorMapBuilder<T>;
}
