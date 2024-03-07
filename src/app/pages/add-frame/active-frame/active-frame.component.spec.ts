import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFrameComponent } from './active-frame.component';

describe('ActiveFrameComponent', () => {
  let component: ActiveFrameComponent;
  let fixture: ComponentFixture<ActiveFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveFrameComponent]
    });
    fixture = TestBed.createComponent(ActiveFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
