import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMainComponent } from './subject-main.component';

describe('SubjectMainComponent', () => {
  let component: SubjectMainComponent;
  let fixture: ComponentFixture<SubjectMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectMainComponent]
    });
    fixture = TestBed.createComponent(SubjectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
