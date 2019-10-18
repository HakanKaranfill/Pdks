/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserWorkPlanService } from './userWorkPlan.service';

describe('Service: UserWorkPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserWorkPlanService]
    });
  });

  it('should ...', inject([UserWorkPlanService], (service: UserWorkPlanService) => {
    expect(service).toBeTruthy();
  }));
});
