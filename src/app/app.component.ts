import { Component, OnInit } from '@angular/core';

import { IndividualFormBuilderService } from './services';
import { FormWithValidation } from '../../projects/drmueller/ng-rx-forms/src/public_api';
import { Individual } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public dataForm: FormWithValidation;

  public individual: Individual = new Individual();

  public constructor(private formBuilder: IndividualFormBuilderService) {
    this.dataForm = this.formBuilder.buildForm();
  }

  public ngOnInit(): void {
  }

  public saveAsync(): void {
    this.individual = new Individual();
    this.dataForm.setModelFromControls(this.individual);
  }
}
