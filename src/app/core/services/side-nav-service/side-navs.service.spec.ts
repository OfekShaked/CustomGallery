import { TestBed } from '@angular/core/testing';

import { SideNavsService } from './side-navs.service';

describe('SideNavsService', () => {
  let service: SideNavsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
