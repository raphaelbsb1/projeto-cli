/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiretivaNgifService } from './diretiva-ngif.service';

describe('Service: DiretivaNgif', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaNgifService]
    });
  });

  it('should ...', inject([DiretivaNgifService], (service: DiretivaNgifService) => {
    expect(service).toBeTruthy();
  }));
});
