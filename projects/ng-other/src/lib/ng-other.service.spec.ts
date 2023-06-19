import { TestBed } from '@angular/core/testing';

import { NgOtherService } from './ng-other.service';

describe('NgOtherService', () => {
  let service: NgOtherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOtherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
