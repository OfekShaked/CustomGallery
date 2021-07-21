import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTakePicComponent } from './camera-take-pic.component';

describe('CameraTakePicComponent', () => {
  let component: CameraTakePicComponent;
  let fixture: ComponentFixture<CameraTakePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraTakePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTakePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
