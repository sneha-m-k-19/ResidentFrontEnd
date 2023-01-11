import { TestBed } from '@angular/core/testing';

import { AuthenticationfilterGuard } from './authenticationfilter.guard';

describe('AuthenticationfilterGuard', () => {
  let guard: AuthenticationfilterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationfilterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
