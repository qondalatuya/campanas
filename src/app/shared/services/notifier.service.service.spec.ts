import { TestBed } from '@angular/core/testing';

import { NotifierService } from './notifier.service.service';

describe('Notifier.ServiceService', () => {
  let service: NotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
