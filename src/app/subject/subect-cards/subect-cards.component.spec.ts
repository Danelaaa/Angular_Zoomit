import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubectCardsComponent } from './subect-cards.component';

describe('SubectCardsComponent', () => {
  let component: SubectCardsComponent;
  let fixture: ComponentFixture<SubectCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubectCardsComponent]
    });
    fixture = TestBed.createComponent(SubectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
