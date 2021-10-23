import { TestBed } from '@angular/core/testing';

import { RightorwrongService } from './rightorwrong.service';

describe('RightorwrongService', () => {
  let service: RightorwrongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightorwrongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
