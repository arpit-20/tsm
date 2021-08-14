import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpComponent } from './gmp.component';

describe('GmpComponent', () => {
  let component: GmpComponent;
  let fixture: ComponentFixture<GmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
