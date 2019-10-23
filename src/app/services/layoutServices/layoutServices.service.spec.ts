/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutServicesService } from './layoutServices.service';

describe('Service: LayoutServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutServicesService]
    });
  });

  it('should ...', inject([LayoutServicesService], (service: LayoutServicesService) => {
    expect(service).toBeTruthy();
  }));
});
