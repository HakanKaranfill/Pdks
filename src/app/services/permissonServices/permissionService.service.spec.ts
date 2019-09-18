/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionServiceService } from './permissionService.service';

describe('Service: PermissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionServiceService]
    });
  });

  it('should ...', inject([PermissionServiceService], (service: PermissionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
