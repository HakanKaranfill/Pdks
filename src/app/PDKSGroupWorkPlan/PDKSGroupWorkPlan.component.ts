import { Component, OnInit } from '@angular/core';
import Form from "devextreme/ui/form";
import {groupFormModel,controlModel} from '../model/groupModel';
import {groupServiceService} from '../services/groupServices/groupService.service'
import {workPlanForGroupModels,  workPlanTypeModel} from '../model/workPlanForGroupModel';
import {shiftAndPermissionServices} from '../services/shiftAndPermissionServices/shiftAndPermissionServices.service'
import { workPlanForGroupService} from '../services/groupWorkPlan/groupWorkPlan.service'
import Swal from 'sweetalert2'
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
import { Direct } from 'protractor/built/driverProviders';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
var actionValue : number = 0;


var selectedValue : number = 0;
@Component({
  selector: 'app-PDKSGroupWorkPlan',
  templateUrl: './PDKSGroupWorkPlan.component.html',
  styleUrls: ['./PDKSGroupWorkPlan.component.css']
})
export class PDKSCreateGroupComponent implements OnInit {
  public theBoundCallback: Function;
  groupName: string;
  groupForm : groupFormModel;
  groupList : groupFormModel[];
  selectedData : workPlanTypeModel;
  shiftAndPermissionType : workPlanTypeModel[];
  
  workPlanForGroup: string[];
  workPlanForGroupForm : workPlanForGroupModels;
  groupWorkList : workPlanForGroupModels[];
  selectedValues = selectedValue
  actionControl : controlModel[];
  groupListHeader;
  isPopupCreatingStaff = false;
  isPopupCreatingGroupPlan = false ;

  constructor(public groupService : groupServiceService, public workPlanForGroupService : workPlanForGroupService, public shiftAndPermissionService : shiftAndPermissionServices ) { 
    this.groupForm = groupService.getGroupFormInstance()
  
  }

  

  ngOnInit() {
    this.groupListHeader="Grup Listesi" 
    this.theBoundCallback = this.theCallback.bind(this);
    this.getGroup();
    this.getShiftAndPermissionType();

  }
  btnClear() { 
    let element = document.getElementById("formGroup");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }
  //İzin Listesi Çekiliyor..
  getGroup(){
this.groupService.getGroups().subscribe(result=>{
  this.getShiftAndPermissionType();
  this.groupList=result;
  
})
  }

  getShiftAndPermissionType(){
    this.shiftAndPermissionService.getWorkPlan().subscribe(result=>{
            this.shiftAndPermissionType=result
           
                            });
    }

  getWorkGroupPlan(){
        this.workPlanForGroupService.getworkPlanForGroup(selectedValue).subscribe(result=>{
      this.groupWorkList=result;
    })
      }

  public theCallback(){
    this.getWorkGroupPlan();
    this.isPopupCreatingGroupPlan = false
    
  }
 

  //İzin Silme
  Delete(e){
   
    this.groupService.getGroupControl(e.data.kimlik).subscribe(result=>{
      this.actionControl = result ;
      actionValue = this.actionControl[0].groupControl 

      if(actionValue > 0) 
      {
        //this.getGroup()
        //this.getWorkGroupPlan()
        Swal.fire({
          type: 'error',
          title: 'Hata...',
          text: 'Kullanıcıya Tanımlanmış Grup Silinemez !'
          })
          this.getGroup()
          this.groupWorkList = null
        }
      else{
        this.groupService.deleteGroup(e.data).subscribe(result => {
          this.getGroup()
          this.getWorkGroupPlan()
          this.groupWorkList = null
              })
      }
          this.groupName = ""
    })
   
   
   
   
   
   
  }

  DeleteGroupWorkList(e){
    this.workPlanForGroupService.deleteworkPlanForGroup(e.data).subscribe(result => {
      this.getGroup()
      this.getWorkGroupPlan()
      this.groupName = ""
          })
  }

  onToolbarPreparing(e) 
  {
    e.toolbarOptions.items.unshift(
      {
        location: 'before'       
      },    
      {
        location: 'after',
        widget: 'dxButton',        
        options: {
                  icon: 'add',
                  hint: 'Grup Çalışma Planı Oluştur.',
                  onClick: this.groupForWorkPlan.bind(this)
                  
                }
      }
    );
    // this.addButtonDefaultValue =1;
  }

  
  groupForWorkPlan(e){
    if (selectedValue > 0)
    {
        this.isPopupCreatingGroupPlan = true
        
    }
    else
    {
      Swal.fire({
        type: 'error',
        title: 'Hata...',
        text: 'Grup Seçimi Yapmadınız!'
        })
    }
                  }
                    
  
  selectionChanged(e){
        debugger
        this.groupName=e.selectedRowsData[0].GRUP_ADI;
        this.selectedData = e.selectedRowsData[0].kimlik;
        selectedValue = e.selectedRowsData[0].kimlik
        this.workPlanForGroupService.getworkPlanForGroup(e.selectedRowsData[0].kimlik).subscribe(result=>{
          this.groupWorkList=result;
        })
        }
    

  Update(e){
    this.groupService.saveGroup(e.data).subscribe(result => {
            this.getGroup()
            })
        }


        updateGroupWorkList(e){
          debugger
          console.log(e)
          this.workPlanForGroupService.saveworkPlanForGroup(e.data,"").subscribe(result => {
            
          })
        }

saveGroup(){   
  debugger
  let element = document.getElementById("formGroup");
  let instance = Form.getInstance(element) as Form; 
  let result = instance.validate()
  if (result.isValid) 
  {
    console.log("TUNA")
    this.groupService.saveGroup(this.groupForm).subscribe(result => {
      debugger
      if (result["message"]=="Ok") {
        notify({
          message: "Kaydetme İşlemi Başarılı.",
          position: {
              my: "center top",
              at: "center top"
          }
      }, "success", 1500); 
      this.getGroup();
      this.btnClear();
      }
      else{
        notify({
          message: "Kaydetme İşlemi Başarısız.",
          position: {
              my: "center top",
              at: "center top"
          }
      }, "error", 1500); 
      }
    })
  }
  }
  onCellPrepared(e){
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
}

//  var result = confirm("Silme işlemini onaylıyor musunuz?", "Silme İşlemi");
//     result.then(function (dialogResult) {
//       debugger
//       if (dialogResult == true) {

//       }
//       else {
//         console.log("Hayır dedi");
//       }
//     });