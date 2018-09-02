import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxFormsComponent } from './ng-rx-forms.component';

describe('NgRxFormsComponent', () => {
  let component: NgRxFormsComponent;
  let fixture: ComponentFixture<NgRxFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
