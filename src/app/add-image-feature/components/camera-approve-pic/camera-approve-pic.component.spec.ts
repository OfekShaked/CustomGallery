import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraApprovePicComponent } from './camera-approve-pic.component';

describe('CameraApprovePicComponent', () => {
  let component: CameraApprovePicComponent;
  let fixture: ComponentFixture<CameraApprovePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraApprovePicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraApprovePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
