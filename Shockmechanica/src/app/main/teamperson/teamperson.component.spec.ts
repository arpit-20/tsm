import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeampersonComponent } from './teamperson.component';

describe('TeampersonComponent', () => {
  let component: TeampersonComponent;
  let fixture: ComponentFixture<TeampersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeampersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeampersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
