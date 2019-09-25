/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { groupServiceService } from './groupService.service';

describe('Service: GroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [groupServiceService]
    });
  });

  it('should ...', inject([groupServiceService], (service: groupServiceService) => {
    expect(service).toBeTruthy();
  }));
});




