import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalsMainCardsComponent } from './proffesionals-main-cards.component';

describe('ProffesionalsMainCardsComponent', () => {
  let component: ProffesionalsMainCardsComponent;
  let fixture: ComponentFixture<ProffesionalsMainCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProffesionalsMainCardsComponent]
    });
    fixture = TestBed.createComponent(ProffesionalsMainCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
