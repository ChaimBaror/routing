import { TestBed } from '@angular/core/testing';

import { GiapitService } from './giapit.service';

describe('GiapitService', () => {
  let service: GiapitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiapitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
