import { TestBed } from '@angular/core/testing';

import { CanEnterLibraryGuard } from './can-enter-library.guard';

describe('CanEnterLibraryGuard', () => {
  let guard: CanEnterLibraryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEnterLibraryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
