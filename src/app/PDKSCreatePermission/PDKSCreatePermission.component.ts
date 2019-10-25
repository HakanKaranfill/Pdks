import { Component, OnInit } from '@angular/core';
import Form from "devextreme/ui/form";
import {permissonFormModel,permissionTypeModel, controlModel} from '../model/permissionFormModel';
import {PermissionServiceService} from '../services/permissonServices/permissionService.service'
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
import Swal from 'sweetalert2';

var actionValue : number = 0;

@Component({
  selector: 'app-PDKSCreatePermission',
  templateUrl: './PDKSCreatePermission.component.html',
  styleUrls: ['./PDKSCreatePermission.component.css']
})
export class PDKSCreatePermissionComponent implements OnInit {
  
  permisssion: string[];
  permissionForm : permissonFormModel;
  permissionType : permissionTypeModel[];
  permisssionsList : permissonFormModel[];
  actionControl : controlModel[];
  permissionHeader ;
  
  isPopupCreatingStaff = false;

  constructor(public perService : PermissionServiceService) { 
    this.permissionForm = perService.getPermissionFormInstance()
    this.permissionType = perService.getPermissionTypes();
   
  }

  ngOnInit() {
this.permissionHeader = "İzin Listesi"
this.getPermissions();
  }
  btnClear() { 
    let element = document.getElementById("formPermission");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }
  //İzin Listesi Çekiliyor..
  getPermissions(){
this.perService.getPermissions().subscribe(result=>{
  this.permisssionsList=result;
})
  }



  //İzin Silme
  Delete(e){
    this.perService.getPermissionsControl(e.data.kimlik).subscribe(result=>{
      this.actionControl = result ;
      actionValue = this.actionControl[0].permissionControl 

      if(actionValue > 0) 
      {
        this.getPermissions()
        Swal.fire({
          type: 'error',
          title: 'Hata...',
          text: 'Çalışma Planına Eklenen Tatil / İzin Silinemez !'
          })
          
      }
      else{
          this.perService.deletePermission(e.data).subscribe(result => {
          
              })
      }
    })
  }

  Update(e){
    this.perService.getPermissionsControl(e.data.kimlik).subscribe(result=>{
      this.actionControl = result ;
      actionValue = this.actionControl[0].permissionControl 

      if(actionValue > 0) 
      {
        this.getPermissions()
        Swal.fire({
          type: 'error',
          title: 'Hata...',
          text: 'Çalışma Planına Eklenen Tatil / İzin Değiştirilemez !'
          })
          
      }
      else{
        this.perService.savePermission(e.data).subscribe(result => {
          this.getPermissions()
        })
      }
    })
  }

  savePermisson(){   
  console.log(this.permissionForm)
  let element = document.getElementById("formPermission");
  let instance = Form.getInstance(element) as Form; 
  let result = instance.validate()
  if (result.isValid) 
  {
    this.perService.savePermission(this.permissionForm).subscribe(result => {
      debugger
      if (result["message"]=="Ok") {
        notify({
          message: "Kaydetme İşlemi Başarılı.",
          position: {
              my: "center top",
              at: "center top"
          }
      }, "success", 1500); 
      this.getPermissions();
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
