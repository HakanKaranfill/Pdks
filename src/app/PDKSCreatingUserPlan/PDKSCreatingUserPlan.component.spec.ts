/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDKSCreatingUserPlanComponent } from './PDKSCreatingUserPlan.component';

describe('PDKSCreatingUserPlanComponent', () => {
  let component: PDKSCreatingUserPlanComponent;
  let fixture: ComponentFixture<PDKSCreatingUserPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDKSCreatingUserPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDKSCreatingUserPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
