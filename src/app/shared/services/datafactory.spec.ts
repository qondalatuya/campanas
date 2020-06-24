import { async, ComponentFixture, TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {timer} from "rxjs";

import {HttpClientTestingModule,HttpTestingController}from"@angular/common/http/testing"

import {DataFactory}from"../services/datafactory";
import {apiOSPRERA, apiOSPRERAProvincias}from"../values"

import { Provincia } from '../models/provincia.interface';


describe("prueba del service con MockHttp",()=>{

    let injector:TestBed;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[DataFactory]

        })
        //se asignan las variables
        injector=getTestBed();
        httpMock=injector.get(HttpTestingController);
        
    })

    afterEach(()=>{
        //verifica que no haya solicitudes pendientes
        httpMock.verify();
    })
    
    it("se crea el servicio",()=>{
        const service:DataFactory = TestBed.get(DataFactory);
        expect(service).toBeTruthy();
    })

    it("obtener las provincias con el metodo getProvincias$",()=>{
        const service:DataFactory = TestBed.get(DataFactory);
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
        service.getProvincias$().subscribe(
            result=>{
                expect(result.length).toBe(6);
                expect (result).toEqual(mockProvincia);
                expect(result[1].Id).toBeDefined;
            },
            error=>{
                expect(false).toBeTruthy();
            }
        );
        //aca es donde le digo que atrape todas als peticiones a la api
        const req = httpMock.expectOne(apiOSPRERAProvincias);

        expect(req.request.method).toBe("GET");

        req.flush(mockProvincia); //recién este resuelve la petición que fue capturada por el httpmock
    })
    
})

xdescribe("prueba del service con la api real",()=>{
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientModule],
            providers:[DataFactory]
        })
                
    })
    
    it("obtener provincias",()=>{
        const service:DataFactory=TestBed.get(DataFactory);
        service.getProvincias$().subscribe(
            (result) => {
                expect(result.length).toBeGreaterThan(0);
            }
        )
        
        expect(true).toBeTruthy();
    })
    
})