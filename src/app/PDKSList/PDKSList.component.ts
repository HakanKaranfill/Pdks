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
import {TitleServicesService} from '../services/titleServices/titleService.service'
import {titleModels} from '../model/titleModel'
//import { ConsoleReporter } from 'jasmine';
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
  isPopupCreateTitle = false ;
  isPopupCreatingGroupPlan = false;
  isPopupUserPlan = false;
  isPopupGroupWorkPlan = false;  
  staffList : any;
  getGroupEdit : groupFormModel[];
  getTitleEdit : titleModels[];
  selectedData : staffDTO;
  data : boolean = false  ;
  isPopupMonthlySchedule : boolean= false  ;
  selectedID : number = 0;
  isPopupMonthlyReport = false


   constructor(public _router: Router,private apistaffService:StaffService , public groupService : groupServiceService, public titleService : TitleServicesService) { 
    // this.isPopupCreatePermission = false;
    // this.isPopupShiftPlan = false;
    // this.isPopupGroupPlan = false;
    // this.isPopupCreateTitle = false ;
    // this.isPopupCreatingGroupPlan = false;
    // this.isPopupUserPlan = false;
    // this.isPopupGroupWorkPlan = false;  
    // this.isPopupMonthlyReport = false
    this.getStaffList();
    this.getGroupEdits();
    this.getTitleEdits();
    that=this;
    
   }
 
  ngOnInit() {
   
  }

  getStaffList(){
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


getTitleEdits(){
  // debugger
  this.titleService.getTitle().subscribe(result => {
  this.getTitleEdit=result;
  })
}

//Personel Bilgilerini Günceller
UpdateStaff(e){
  // debugger
  // console.log(e)
  this.apistaffService.updateStaff(e.data).subscribe(result => {
    this.getStaffList()
  })
}

PopupMonthlySchedule(e){
  this.isPopupMonthlySchedule = true;  
       //btnclear fnk
                        }   
PopupMonthlyReport(e){
  this.isPopupMonthlyReport = true;  
        //btnclear fnk
                        }  
                        onCellPrepared(e){
                          // debugger
                          // console.log(e.data)
                          // if(e.rowType === 'data') {
                          //     if(e.data.ONAY === true) {
                          //       // e.cellElement.style.color = '#AAAAAA';
                          //       e.cellElement.style.backgroundColor = '#70cf8096';
                          //       e.cellElement.style.color = '#000000';
                          //     }
                          //     else{
                          //       e.cellElement.style.color = '#AAAAAA'
                          //     }
                          //     // if(e.data.SaleAmount > 15000) {
                          //     //   if(e.column.dataField === 'OrderNumber') {
                          //     //     e.cellElement.style.fontWeight = 'bold';
                          //     //   }
                          //     //   if(e.column.dataField === 'SaleAmount') {
                          //     //     e.cellElement.style.backgroundColor = '#FFBB00';
                          //     //     e.cellElement.style.color = '#000000';
                          //     //   }
                          //     // }
                          // }
                          if(e.rowType === 'group') {
                              var nodeColors = [ '#BEDFE6', '#C9ECD7'];
                              e.cellElement.style.backgroundColor = nodeColors[e.row.groupIndex];
                              e.cellElement.style.color = '#000';
                              if(e.cellElement.firstChild && e.cellElement.firstChild.style) e.cellElement.firstChild.style.color = '#000';
                          }
                          if(e.rowType === 'groupFooter') {
                              e.cellElement.style.fontStyle = 'italic';
                          }       
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
