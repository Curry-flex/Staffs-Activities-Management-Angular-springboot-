import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientPrintComponent } from './recipient-print.component';

describe('RecipientPrintComponent', () => {
  let component: RecipientPrintComponent;
  let fixture: ComponentFixture<RecipientPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
