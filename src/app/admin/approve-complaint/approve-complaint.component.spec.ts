import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveComplaintComponent } from './approve-complaint.component';

describe('ApproveComplaintComponent', () => {
  let component: ApproveComplaintComponent;
  let fixture: ComponentFixture<ApproveComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
