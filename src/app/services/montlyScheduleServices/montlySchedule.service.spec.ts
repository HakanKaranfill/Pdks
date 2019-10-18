/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MontlyScheduleService } from './montlySchedule.service';

describe('Service: MontlySchedule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MontlyScheduleService]
    });
  });

  it('should ...', inject([MontlyScheduleService], (service: MontlyScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
