import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTeamComponent } from './developer-team.component';

describe('DeveloperTeamComponent', () => {
  let component: DeveloperTeamComponent;
  let fixture: ComponentFixture<DeveloperTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
