import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditScheduleComponent } from './view-edit-schedule.component';

describe('ViewEditScheduleComponent', () => {
  let component: ViewEditScheduleComponent;
  let fixture: ComponentFixture<ViewEditScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
