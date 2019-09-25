import { Component, OnInit } from '@angular/core';
import Form from "devextreme/ui/form";
import {groupFormModel} from '../model/groupModel';
import {groupServiceService} from '../services/groupServices/groupService.service'
import {workPlanForGroupModels} from '../model/workPlanForGroupModel';
import { workPlanForGroupService} from '../services/groupWorkPlan/groupWorkPlan.service'

import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';



@Component({
  selector: 'app-PDKSGroupWorkPlan',
  templateUrl: './PDKSGroupWorkPlan.component.html',
  styleUrls: ['./PDKSGroupWorkPlan.component.css']
})
export class PDKSCreateGroupComponent implements OnInit {
  
  group: string[];
  groupForm : groupFormModel;
  groupList : groupFormModel[];

  workPlanForGroup: string[];
  workPlanForGroupForm : workPlanForGroupModels;
  groupWorkList : workPlanForGroupModels[];

  
  isPopupCreatingStaff = false;
  isPopupCreatingGroupPlan = false ;

  constructor(public groupService : groupServiceService, public workPlanForGroupService : workPlanForGroupService) { 
    this.groupForm = groupService.getGroupFormInstance()
  
  }

  

  ngOnInit() {

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
 

  //İzin Silme
  Delete(e){
    debugger
    console.log('delete')
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
    this.isPopupCreatingGroupPlan = true
           }
  
  selectionChanged(e){
        debugger
        console.log(e.selectedRowsData[0].kimlik)
        this.workPlanForGroupService.getworkPlanForGroup(e.selectedRowsData[0].kimlik).subscribe(result=>{
          this.groupWorkList=result;
          // this.getWorkGroup()
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
  console.log(this.groupForm)
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