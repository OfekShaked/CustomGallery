import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalImageAddComponent } from './local-image-add.component';

describe('LocalImageAddComponent', () => {
  let component: LocalImageAddComponent;
  let fixture: ComponentFixture<LocalImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalImageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
