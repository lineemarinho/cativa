import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFrameComponent } from './send-frame.component';

describe('SendFrameComponent', () => {
  let component: SendFrameComponent;
  let fixture: ComponentFixture<SendFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendFrameComponent]
    });
    fixture = TestBed.createComponent(SendFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
