/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroupWorkPlanService } from './groupWorkPlan.service';

describe('Service: GroupWorkPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupWorkPlanService]
    });
  });

  it('should ...', inject([GroupWorkPlanService], (service: GroupWorkPlanService) => {
    expect(service).toBeTruthy();
  }));
});
