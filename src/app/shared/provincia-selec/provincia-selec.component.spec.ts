import { async, ComponentFixture, TestBed, fakeAsync, tick, getTestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {timer, of, Observable} from "rxjs";


import { ProvinciaSelecComponent } from './provincia-selec.component';
import {DataFactory}from"../services/datafactory.service";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Provincia } from '../models/provincia.interface';


describe('ProvinciaSelecComponent tests (API real)', () => {
  let component: ProvinciaSelecComponent;
  let fixture: ComponentFixture<ProvinciaSelecComponent>;

  beforeEach( () =>{
    TestBed.configureTestingModule({
      declarations: [ ProvinciaSelecComponent ],
      imports:[HttpClientModule],
      providers:[DataFactory],
    }).compileComponents();

    fixture =  TestBed.createComponent(ProvinciaSelecComponent);
    component =  fixture.componentInstance;
    fixture.detectChanges();

  });

  it("rellenar el array de provincias desde el datafactory llamando a la API",  async(()=>{ 
    
    component.ngOnInit();

    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      expect(component.provincias.length).toBeGreaterThan(0);
    });
  }));

});

describe("ProvinciaSelecComponent tests",()=>{
  let component: ProvinciaSelecComponent;
  let fixture: ComponentFixture<ProvinciaSelecComponent>;
  let datafactory;
  
  beforeEach (()=>{
    TestBed.configureTestingModule({
      declarations:[ProvinciaSelecComponent],
      imports:[HttpClientTestingModule],
      providers:[DataFactory]
      
    }).compileComponents;
    fixture = getTestBed().createComponent(ProvinciaSelecComponent);
    component=fixture.componentInstance;
    datafactory=TestBed.get(DataFactory);

  })

  it("Debe rellenar el array de provincias desde el metodo getProvincias$ del datafactory",()=>{
    let mockProvincia:Provincia[]=[
      {
          Id: 1,
          Descripcion: "CAPITAL FEDERAL     "
      },
      {
          Id: 2,
          Descripcion: "BUENOS AIRES        "
      },
      {
          Id: 3,
          Descripcion: "CATAMARCA           "
      },
      {
          Id: 4,
          Descripcion: "CORDOBA             "
      },
      {
          Id: 5,
          Descripcion: "CORRIENTES          "
      },
      {
          Id: 6,
          Descripcion: "CHACO               "
      }
  ]
    const provincias = spyOn(datafactory,"getProvincias$").and.callFake(
      provincias=>{
        return of(mockProvincia)
    })
    
    component.ngOnInit()
    
    expect (provincias).toHaveBeenCalled;
    expect(component.provincias.length).toBeGreaterThan(0);
    

  })
})
