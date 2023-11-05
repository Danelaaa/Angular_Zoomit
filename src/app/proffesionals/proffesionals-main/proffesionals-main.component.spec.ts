import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalsMainComponent } from './proffesionals-main.component';

describe('ProffesionalsMainComponent', () => {
  let component: ProffesionalsMainComponent;
  let fixture: ComponentFixture<ProffesionalsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProffesionalsMainComponent]
    });
    fixture = TestBed.createComponent(ProffesionalsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
