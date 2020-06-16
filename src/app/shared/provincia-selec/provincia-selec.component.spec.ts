import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaSelecComponent } from './provincia-selec.component';

describe('ProvinciaSelecComponent', () => {
  let component: ProvinciaSelecComponent;
  let fixture: ComponentFixture<ProvinciaSelecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinciaSelecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaSelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
