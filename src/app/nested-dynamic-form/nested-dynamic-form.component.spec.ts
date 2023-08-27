import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDynamicFormComponent } from './nested-dynamic-form.component';

describe('NestedDynamicFormComponent', () => {
  let component: NestedDynamicFormComponent;
  let fixture: ComponentFixture<NestedDynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NestedDynamicFormComponent]
    });
    fixture = TestBed.createComponent(NestedDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
