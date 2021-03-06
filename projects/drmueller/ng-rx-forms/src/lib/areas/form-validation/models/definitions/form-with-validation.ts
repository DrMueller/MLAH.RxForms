import { FormGroup } from '@angular/forms';

import { ValidatedControl, ValidatedForm } from '../..';

export class FormWithValidation<T> {
  constructor(private _formGroup: FormGroup, private validatedForm: ValidatedForm<T>) {
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public get isFormValid(): boolean {
    return this._formGroup.valid;
  }

  public setControlDataFromModel(model: T): void {
    const boundControls = this.validatedForm.getControlsWithModelBinding();
    boundControls.forEach(c => {
      const modelValue = model[c.modelPropertyName];
      this._formGroup.controls[c.controlName].setValue(modelValue);
    });
  }

  public setModelFromControls(model: T): void {
    const boundControls = this.validatedForm.getControlsWithModelBinding();
    boundControls.forEach(c => {
      const controlValue = this._formGroup.controls[c.controlName].value;
      model[c.modelPropertyName] = controlValue;
    });
  }

  public getValidatedControl(controlName: string): ValidatedControl<T> {
    return this.validatedForm.find(controlName);
  }
}
