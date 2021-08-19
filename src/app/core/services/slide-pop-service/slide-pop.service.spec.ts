import { TestBed } from '@angular/core/testing';

import { SlidePopService } from './slide-pop.service';

describe('SlidePopService', () => {
  let service: SlidePopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidePopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
