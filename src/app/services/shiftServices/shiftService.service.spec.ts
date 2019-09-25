/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { shiftServiceService } from '../shiftService/shiftService.service';

describe('Service: ShiftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [shiftServiceService]
    });
  });

  it('should ...', inject([shiftServiceService], (service: shiftServiceService) => {
    expect(service).toBeTruthy();
  }));
});
