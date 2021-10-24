import { TestBed } from '@angular/core/testing';

import { MstotimeService } from './mstotime.service';

describe('MstotimeService', () => {
  let service: MstotimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MstotimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
