import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCreationPageComponent } from './library-creation-page.component';

describe('LibraryCreationPageComponent', () => {
  let component: LibraryCreationPageComponent;
  let fixture: ComponentFixture<LibraryCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryCreationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
