import { TestBed } from '@angular/core/testing';

import { FiszkiService } from './fiszki.service';

describe('FiszkiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiszkiService = TestBed.get(FiszkiService);
    expect(service).toBeTruthy();
  });
});
