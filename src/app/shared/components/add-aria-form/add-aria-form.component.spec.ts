import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAriaFormComponent } from './add-aria-form.component';

describe('AddAriaFormComponent', () => {
  let component: AddAriaFormComponent;
  let fixture: ComponentFixture<AddAriaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAriaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
