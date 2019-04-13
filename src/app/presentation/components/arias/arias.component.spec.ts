import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriasComponent } from './arias.component';

describe('AriasComponent', () => {
  let component: AriasComponent;
  let fixture: ComponentFixture<AriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
