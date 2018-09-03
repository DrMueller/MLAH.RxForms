import { FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { IFormWatchingBuilder, IRxFormBuilder } from '../';
import { FormValidationService } from '../../form-validation';

export class FormWatchingBuilder<T> implements IFormWatchingBuilder<T> {
  private debounceMilliseconds = 0;

  public constructor(
    private formGroup: FormGroup,
    private formValidationService: FormValidationService<T>,
    private formBuildingService: IRxFormBuilder<T>) {
  }

  public buildFormWatcher(): IRxFormBuilder<T> {
    this.formGroup.valueChanges.pipe(
      debounceTime(this.debounceMilliseconds)
    ).subscribe(() => {
      this.formValidationService.validate();
    });

    return this.formBuildingService;
  }

  public withDebounceTime(debounceMilliseconds: number): IFormWatchingBuilder<T> {
    this.debounceMilliseconds = debounceMilliseconds;
    return this;
  }
}
