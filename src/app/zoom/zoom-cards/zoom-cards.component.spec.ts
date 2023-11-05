import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomCardsComponent } from './zoom-cards.component';

describe('ZoomCardsComponent', () => {
  let component: ZoomCardsComponent;
  let fixture: ComponentFixture<ZoomCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomCardsComponent]
    });
    fixture = TestBed.createComponent(ZoomCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
