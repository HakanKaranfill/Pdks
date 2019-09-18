/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDKSCreatingGroupPlanComponent } from './PDKSCreatingGroupPlan.component';

describe('PDKSCreatingGroupPlanComponent', () => {
  let component: PDKSCreatingGroupPlanComponent;
  let fixture: ComponentFixture<PDKSCreatingGroupPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDKSCreatingGroupPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDKSCreatingGroupPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
