import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantRegComponent } from './compliant-reg.component';

describe('CompliantRegComponent', () => {
  let component: CompliantRegComponent;
  let fixture: ComponentFixture<CompliantRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliantRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompliantRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
