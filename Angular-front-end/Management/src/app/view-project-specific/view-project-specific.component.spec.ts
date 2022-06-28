import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectSpecificComponent } from './view-project-specific.component';

describe('ViewProjectSpecificComponent', () => {
  let component: ViewProjectSpecificComponent;
  let fixture: ComponentFixture<ViewProjectSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
