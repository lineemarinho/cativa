import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrameComponent } from './add-frame.component';

describe('AddFrameComponent', () => {
  let component: AddFrameComponent;
  let fixture: ComponentFixture<AddFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFrameComponent]
    });
    fixture = TestBed.createComponent(AddFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
