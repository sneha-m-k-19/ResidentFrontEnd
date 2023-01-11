import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentFamilyViewComponent } from './apartment-family-view.component';

describe('ApartmentFamilyViewComponent', () => {
  let component: ApartmentFamilyViewComponent;
  let fixture: ComponentFixture<ApartmentFamilyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentFamilyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentFamilyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
