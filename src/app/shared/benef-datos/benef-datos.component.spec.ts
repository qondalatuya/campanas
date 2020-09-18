import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefDatosComponent } from './benef-datos.component';

describe('BenefDatosComponent', () => {
  let component: BenefDatosComponent;
  let fixture: ComponentFixture<BenefDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
