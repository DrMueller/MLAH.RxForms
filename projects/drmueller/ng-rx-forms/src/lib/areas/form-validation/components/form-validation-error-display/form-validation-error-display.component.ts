import { Component, OnInit, Input } from '@angular/core';

import { ValidatedControl } from '../../models';

@Component({
  selector: 'drm-form-validation-error-display',
  templateUrl: './form-validation-error-display.component.html',
  styleUrls: ['./form-validation-error-display.component.scss']
})
export class FormValidationErrorDisplayComponent<T> implements OnInit {
  @Input() public validatedControl: ValidatedControl<T>;

  constructor() { }

  ngOnInit() {
  }
}
