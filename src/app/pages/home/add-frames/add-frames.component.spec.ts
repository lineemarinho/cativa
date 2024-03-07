import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFramesComponent } from './add-frames.component';

describe('AddFramesComponent', () => {
  let component: AddFramesComponent;
  let fixture: ComponentFixture<AddFramesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFramesComponent]
    });
    fixture = TestBed.createComponent(AddFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
