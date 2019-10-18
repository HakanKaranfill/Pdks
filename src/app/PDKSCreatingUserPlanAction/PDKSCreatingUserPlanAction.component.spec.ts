/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PDKSCreatingUserPlanActionComponent } from './PDKSCreatingUserPlanAction.component';

describe('PDKSCreatingUserPlanActionComponent', () => {
  let component: PDKSCreatingUserPlanActionComponent;
  let fixture: ComponentFixture<PDKSCreatingUserPlanActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDKSCreatingUserPlanActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDKSCreatingUserPlanActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
