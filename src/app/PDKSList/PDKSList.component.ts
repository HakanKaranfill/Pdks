import { Component, OnInit, ViewChild } from '@angular/core';
import { DxPopupModule, DxDataGridComponent } from "devextreme-angular";
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/Staff.service'

import { staffDTO } from 'src/app/model/staffModel'
import { ResourceLoader } from '@angular/compiler';

var that;
@Component({
  selector: 'app-PDKSList',
  templateUrl: './PDKSList.component.html',
  styleUrls: ['./PDKSList.component.css']
})
export class PDKSListComponent implements OnInit {
  @ViewChild("grid",{static:false}) grid:DxDataGridComponent
  isPopupCreatingStaff = false;
  isPopupMonthlySchedule = false;
  isPopupCreatePermission = false;
  isPopupShiftPlan = false;
  isPopupGroupPlan = false;
  isPopupCreatingGroupPlan = false;
  isPopupUserPlan = false;
  isPopupGroupWorkPlan = false;
  staffList : staffDTO[];


   constructor(public _router: Router,private apistaffService:StaffService) { 
    that=this;
   }
 
  ngOnInit() {
    debugger
    this.getStaffList()
  }

  // onFormSubmit = function(e)
  // {
  //   this._router.navigate(['/Layout/PDKSList/PDKSForm']);
  // }
  getStaffList(){
    debugger
    this.apistaffService.getServiceStaffList().subscribe(result => {
      debugger
this.staffList=result;
console.log(this.staffList)
// that.grid.datasource=result;
    })
}

//Personel Bilgilerini Günceller
UpdateStaff(e){
  debugger
  console.log(e)
  this.apistaffService.updateStaff(e.data).subscribe(result => {
this.getStaffList()
  })
}
}
