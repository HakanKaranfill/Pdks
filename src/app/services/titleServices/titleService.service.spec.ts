/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitleServicesService } from './titleService.service';

describe('Service: TitleServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitleServicesService]
    });
  });

  it('should ...', inject([TitleServicesService], (service: TitleServicesService) => {
    expect(service).toBeTruthy();
  }));
});
