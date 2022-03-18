import { TestBed } from '@angular/core/testing';

import { AdminauthGuard } from './adminauth.guard';

describe('AdminauthGuard', () => {
  let guard: AdminauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
