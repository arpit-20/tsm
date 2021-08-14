import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesectionComponent } from './sitesection.component';

describe('SitesectionComponent', () => {
  let component: SitesectionComponent;
  let fixture: ComponentFixture<SitesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
