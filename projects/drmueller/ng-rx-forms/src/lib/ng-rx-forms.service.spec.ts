import { TestBed, inject } from '@angular/core/testing';

import { NgRxFormsService } from './ng-rx-forms.service';

describe('NgRxFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgRxFormsService]
    });
  });

  it('should be created', inject([NgRxFormsService], (service: NgRxFormsService) => {
    expect(service).toBeTruthy();
  }));
});
