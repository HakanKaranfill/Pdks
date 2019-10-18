/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDKSMontlyScheduleComponent } from './PDKSMontlySchedule.component';

describe('PDKSMontlyScheduleComponent', () => {
  let component: PDKSMontlyScheduleComponent;
  let fixture: ComponentFixture<PDKSMontlyScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDKSMontlyScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDKSMontlyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
