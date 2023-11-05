import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularZoomMainComponent } from './popular-zoom-main.component';

describe('PopularZoomMainComponent', () => {
  let component: PopularZoomMainComponent;
  let fixture: ComponentFixture<PopularZoomMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularZoomMainComponent]
    });
    fixture = TestBed.createComponent(PopularZoomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
