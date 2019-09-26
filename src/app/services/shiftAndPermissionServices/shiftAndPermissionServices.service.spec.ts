/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShiftAndPermissionServicesService } from './shiftAndPermissionServices.service';

describe('Service: ShiftAndPermissionServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftAndPermissionServicesService]
    });
  });

  it('should ...', inject([ShiftAndPermissionServicesService], (service: ShiftAndPermissionServicesService) => {
    expect(service).toBeTruthy();
  }));
});
