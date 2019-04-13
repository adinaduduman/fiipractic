import { TestBed } from '@angular/core/testing';

import { AriasService } from './arias.service';

describe('AriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AriasService = TestBed.get(AriasService);
    expect(service).toBeTruthy();
  });
});
