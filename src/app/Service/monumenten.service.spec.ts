import { TestBed } from '@angular/core/testing';

import { MonumentenService } from './monumenten.service';

describe('MonumentenService', () => {
  let service: MonumentenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonumentenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
