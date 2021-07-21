import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEnterComponent } from './private-enter.component';

describe('PrivateEnterComponent', () => {
  let component: PrivateEnterComponent;
  let fixture: ComponentFixture<PrivateEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateEnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
