import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomCarsMainComponent } from './zoom-cars-main.component';

describe('ZoomCarsMainComponent', () => {
  let component: ZoomCarsMainComponent;
  let fixture: ComponentFixture<ZoomCarsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomCarsMainComponent]
    });
    fixture = TestBed.createComponent(ZoomCarsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
