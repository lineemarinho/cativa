import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollectionsComponent } from './home-collections.component';

describe('HomeCollectionsComponent', () => {
  let component: HomeCollectionsComponent;
  let fixture: ComponentFixture<HomeCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCollectionsComponent]
    });
    fixture = TestBed.createComponent(HomeCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
