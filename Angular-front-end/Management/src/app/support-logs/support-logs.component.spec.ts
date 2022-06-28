import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportLogsComponent } from './support-logs.component';

describe('SupportLogsComponent', () => {
  let component: SupportLogsComponent;
  let fixture: ComponentFixture<SupportLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
