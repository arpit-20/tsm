import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainintroComponent } from './captainintro.component';

describe('CaptainintroComponent', () => {
  let component: CaptainintroComponent;
  let fixture: ComponentFixture<CaptainintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptainintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
