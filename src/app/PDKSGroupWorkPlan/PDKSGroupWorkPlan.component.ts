import { Component, OnInit } from '@angular/core';
import Form from "devextreme/ui/form";
import {groupFormModel} from '../model/groupModel';
import {groupServiceService} from '../services/groupServices/groupService.service'
import {workPlanForGroupModels,  workPlanTypeModel} from '../model/workPlanForGroupModel';
import { workPlanForGroupService} from '../services/groupWorkPlan/groupWorkPlan.service'
import Swal from 'sweetalert2'
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
import { Direct } from 'protractor/built/driverProviders';



var selectedValue : number = 0;
@Component({
  selector: 'app-PDKSGroupWorkPlan',
  templateUrl: './PDKSGroupWorkPlan.component.html',
  styleUrls: ['./PDKSGroupWorkPlan.component.css']
})
export class PDKSCreateGroupComponent implements OnInit {
  public theBoundCallback: Function;
  
  groupForm : groupFormModel;
  groupList : groupFormModel[];
  selectedData : workPlanTypeModel;

  workPlanForGroup: string[];
  workPlanForGroupForm : workPlanForGroupModels;
  groupWorkList : workPlanForGroupModels[];
  selectedValues = selectedValue
  
  isPopupCreatingStaff = false;
  isPopupCreatingGroupPlan = false ;

  constructor(public groupService : groupServiceService, public workPlanForGroupService : workPlanForGroupService) { 
    this.groupForm = groupService.getGroupFormInstance()
  
  }

  

  ngOnInit() {
    this.theBoundCallback = this.theCallback.bind(this);
    this.getGroup();

  }
  btnClear() { 
    let element = document.getElementById("myForm");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }
  //İzin Listesi Çekiliyor..
  getGroup(){
this.groupService.getGroups().subscribe(result=>{
  this.groupList=result;
  
})
  }

  getWorkGroupPlan(){
    debugger
    console.log(selectedValue)
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
    this.groupService.deleteGroup(e.data).subscribe(result => {
      this.getGroup()
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
        this.selectedData = e.selectedRowsData[0].kimlik;
        selectedValue = e.selectedRowsData[0].kimlik
        this.workPlanForGroupService.getworkPlanForGroup(e.selectedRowsData[0].kimlik).subscribe(result=>{
          this.groupWorkList=result;
        })
        }
    

  Update(e){
    debugger
    console.log(e.data)
    this.groupService.saveGroup(e.data).subscribe(result => {
            this.getGroup()
            })
        }

saveGroup(){   
  debugger
  console.log(this.groupForm)
  console.log(this.groupForm.groupName)
  // console.log(this.groupName)  
  let element = document.getElementById("myForm");
  let instance = Form.getInstance(element) as Form; 
  let result = instance.validate()
  if (result.isValid) 
  {
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