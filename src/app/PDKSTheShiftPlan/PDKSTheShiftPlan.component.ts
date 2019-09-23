import { Component, OnInit } from '@angular/core';
import {shiftFormModel} from '../model/shiftFormModel'
// import {} from '../services/shiftService'

@Component({
  selector: 'app-PDKSTheShiftPlan',
  templateUrl: './PDKSTheShiftPlan.component.html',
  styleUrls: ['./PDKSTheShiftPlan.component.css']
})
export class PDKSTheShiftPlanComponent implements OnInit {
  isPopupCreatingStaff = false;
  constructor() { }

  ngOnInit() {
  }

}
