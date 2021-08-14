import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRangeComponent } from './services-range.component';

describe('ServicesRangeComponent', () => {
  let component: ServicesRangeComponent;
  let fixture: ComponentFixture<ServicesRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
