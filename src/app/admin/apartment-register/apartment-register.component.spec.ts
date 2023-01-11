import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentRegisterComponent } from './apartment-register.component';

describe('ApartmentRegisterComponent', () => {
  let component: ApartmentRegisterComponent;
  let fixture: ComponentFixture<ApartmentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
