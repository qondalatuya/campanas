import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadSelecComponent } from './localidad-selec.component';

describe('LocalidadSelecComponent', () => {
  let component: LocalidadSelecComponent;
  let fixture: ComponentFixture<LocalidadSelecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalidadSelecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalidadSelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
