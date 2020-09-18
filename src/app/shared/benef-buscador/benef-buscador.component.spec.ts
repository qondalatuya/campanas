import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefBuscadorComponent } from './benef-buscador.component';

describe('BenefBuscadorComponent', () => {
  let component: BenefBuscadorComponent;
  let fixture: ComponentFixture<BenefBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
