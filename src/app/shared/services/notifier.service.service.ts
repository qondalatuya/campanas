import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Provincia } from '../models/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  public cambioProvincia:Subject<Provincia>=new Subject();

  constructor() { }
}
