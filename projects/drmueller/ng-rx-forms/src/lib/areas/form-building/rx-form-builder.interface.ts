import { IFormControlBuilder, IFormWatchingBuilder } from '.';
import { FormValidationService, FormWithValidation } from '../form-validation';

export interface IRxFormBuilder<T> {
  buildForm(): FormWithValidation<T>;
  startBuildingFormGroup(formValidationService: FormValidationService<T>): IRxFormBuilder<T>;
  withControl(controlName: string): IFormControlBuilder<T>;
  withFormValidationWatcher(): IFormWatchingBuilder<T>;
}
