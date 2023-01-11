import { TestBed } from '@angular/core/testing';

import { ResBackEndServiceService } from './res-back-end-service.service';

describe('ResBackEndServiceService', () => {
  let service: ResBackEndServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResBackEndServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
