import { TestBed } from '@angular/core/testing';

import { PresentationDetailsService } from './presentation-details.service';

describe('PresentationDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentationDetailsService = TestBed.get(PresentationDetailsService);
    expect(service).toBeTruthy();
  });
});
