import { Component, OnInit, ViewChild, Input } from '@angular/core';
import Form from "devextreme/ui/form";
import { DxPopupModule, DxDataGridComponent } from "devextreme-angular";
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staffServices/Staff.service'
import { staffDTO } from 'src/app/model/staffModel'
import {groupFormModel} from '../model/groupModel'
import { ResourceLoader } from '@angular/compiler';
import { groupServiceService } from '../services/groupServices/groupService.service';
import Swal from 'sweetalert2';
import { debug } from 'util';

var that;

@Component({
  selector: 'app-PDKSList',
  templateUrl: './PDKSList.component.html',
  styleUrls: ['./PDKSList.component.css']
})
export class PDKSListComponent implements OnInit {
  @ViewChild("grid",{static:false}) grid:DxDataGridComponent
  isPopupCreatingStaff = false;
  //isPopupMonthlySchedule = false;
  isPopupCreatePermission = false;
  isPopupShiftPlan = false;
  isPopupGroupPlan = false;
  isPopupCreatingGroupPlan = false;
  isPopupUserPlan = false;
  isPopupGroupWorkPlan = false;  
  staffList : any;
  getGroupEdit : groupFormModel[];
  selectedData : staffDTO;
  data : boolean = false  ;
  isPopupMonthlySchedule : boolean= false  ;
  selectedID : number = 0


   constructor(public _router: Router,private apistaffService:StaffService , public groupService : groupServiceService) { 
    this.getStaffList();
    this.getGroupEdits();
    that=this;
   }
 
  ngOnInit() {
   
  }

  getStaffList(){
    debugger
    this.apistaffService.getServiceStaffList().subscribe(result => {     
    this.staffList=result;
    })
}

getGroupEdits(){
  debugger
  this.groupService.getGroups().subscribe(result => {
  this.getGroupEdit=result;
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

PopupMonthlySchedule(e){
  this.isPopupMonthlySchedule = true;  
       //btnclear fnk
                        }    


selectionChanged(e){
        this.selectedData = e.selectedRowsData[0]
        this.selectedID = e.selectedRowsData[0].PERSONEL_KODU
        }

personelForWorkPlan(e){
  debugger
  console.log(this.selectedID)
  if (this.selectedID > 0)
  {
    debugger
      this.isPopupUserPlan = true
      
  }
  else
  {
    debugger
    Swal.fire({
      type: 'error',
      title: 'Hata...',
      text: 'Personel Seçimi Yapmadınız!'
      })
  }
                }   

                
              
                

}
