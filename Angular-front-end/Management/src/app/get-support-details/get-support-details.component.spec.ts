import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSupportDetailsComponent } from './get-support-details.component';

describe('GetSupportDetailsComponent', () => {
  let component: GetSupportDetailsComponent;
  let fixture: ComponentFixture<GetSupportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSupportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSupportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
