import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyRegComponent } from './family-reg.component';

describe('FamilyRegComponent', () => {
  let component: FamilyRegComponent;
  let fixture: ComponentFixture<FamilyRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
