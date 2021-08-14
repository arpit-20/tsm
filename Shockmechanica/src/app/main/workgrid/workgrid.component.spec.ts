import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkgridComponent } from './workgrid.component';

describe('WorkgridComponent', () => {
  let component: WorkgridComponent;
  let fixture: ComponentFixture<WorkgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
