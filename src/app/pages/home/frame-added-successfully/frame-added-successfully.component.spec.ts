import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameAddedSuccessfullyComponent } from './frame-added-successfully.component';

describe('FrameAddedSuccessfullyComponent', () => {
  let component: FrameAddedSuccessfullyComponent;
  let fixture: ComponentFixture<FrameAddedSuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameAddedSuccessfullyComponent]
    });
    fixture = TestBed.createComponent(FrameAddedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
