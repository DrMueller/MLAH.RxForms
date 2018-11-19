import { IRxFormBuilder, IValidationKeyErrorMapBuilder } from '.';
import { IValidator } from '../validators/services';

export interface IFormControlBuilder<T> {
  buildControl(): IRxFormBuilder<T>;
  withDefaultValue(value: any): IFormControlBuilder<T>;
  withValidation(validator: IValidator): IValidationKeyErrorMapBuilder<T>;
  withModelBinding(propertyName: keyof T): IFormControlBuilder<T>;
}
