import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularZoomCardsComponent } from './popular-zoom-cards.component';

describe('PopularZoomCardsComponent', () => {
  let component: PopularZoomCardsComponent;
  let fixture: ComponentFixture<PopularZoomCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularZoomCardsComponent]
    });
    fixture = TestBed.createComponent(PopularZoomCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
