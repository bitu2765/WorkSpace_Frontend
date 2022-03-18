import { TestBed } from '@angular/core/testing';

import { UserauthGuard } from './userauth.guard';

describe('UserauthGuard', () => {
  let guard: UserauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
