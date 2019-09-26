import { Component, OnInit } from '@angular/core';
import {workPlanTypeModel} from '../model/workPlanForGroupModel';
import {shiftAndPermissionServices} from '../services/shiftAndPermissionServices/shiftAndPermissionServices.service'



@Component({
  selector: 'app-PDKSCreatingGroupPlan',
  templateUrl: './PDKSCreatingGroupPlan.component.html',
  styleUrls: ['./PDKSCreatingGroupPlan.component.css']
})
export class PDKSCreatingGroupPlanComponent implements OnInit {

  shiftAndPermissionType : workPlanTypeModel[];
  constructor(public shiftAndPermissionService : shiftAndPermissionServices) {   }

  ngOnInit() {
              this.getShiftAndPermissionType()
            }
  
  getShiftAndPermissionType(){
      this.shiftAndPermissionService.getWorkPlan().subscribe(result=>{
              this.shiftAndPermissionType=result
             
                              });
      }

      saveWorkPlanForGroup(){}
      workPlanForm(){}

  }



