import { Component, OnInit } from '@angular/core';
import Form from "devextreme/ui/form";
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
import { groupFormModel } from '../model/groupModel';
import { groupServiceService } from '../services/groupServices/groupService.service';

@Component({
  selector: 'app-PDKSCreatingGroupPlan',
  templateUrl: './PDKSCreatingGroupPlan.component.html',
  styleUrls: ['./PDKSCreatingGroupPlan.component.css']
})
export class PDKSCreatingGroupPlanComponent implements OnInit {
  isPopupCreatingStaff = false;
  group: string[];
  groupForm : groupFormModel;
  groupList : groupFormModel[];

  constructor(public groupService : groupServiceService) { this.groupForm = groupService.getGroupFormInstance()}

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
      onClickDelete()
      {
        
      }
      Update(e){
        debugger
        console.log(e)
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
