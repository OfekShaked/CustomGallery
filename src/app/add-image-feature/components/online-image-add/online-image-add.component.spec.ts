import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineImageAddComponent } from './online-image-add.component';

describe('OnlineImageAddComponent', () => {
  let component: OnlineImageAddComponent;
  let fixture: ComponentFixture<OnlineImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineImageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
