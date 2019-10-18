import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import Form from "devextreme/ui/form";
// import {workPlanForGroupModels,  workPlanTypeModel} from '../model/workPlanForGroupModel';
import {shiftAndPermissionServices} from '../services/shiftAndPermissionServices/shiftAndPermissionServices.service'
// import { workPlanForGroupService} from '../services/groupWorkPlan/groupWorkPlan.service'
import {workPlanForUserModels,  userPlanTypeModel, workPlanForUserModelsFrom} from '../model/workPlanForUser';
import { UserWorkPlanService } from '../services/userWorkPlanServices/userWorkPlan.service'
import { workPlanTypeModel } from '../model/workPlanForGroupModel';
import { staffDTO } from 'src/app/model/staffModel'
import Swal from 'sweetalert2'
import notify from 'devextreme/ui/notify';
// import notify from 'devextreme/ui/notify';
// import { confirm } from 'devextreme/ui/dialog';
// import { Direct } from 'protractor/built/driverProviders';
// import { workPlanTypeModel } from '../model/workPlanForGroupModel';
var that;


var selectedValue : number = 0;
@Component({
  selector: 'app-PDKSCreatingUserPlan',
  templateUrl: './PDKSCreatingUserPlan.component.html',
  styleUrls: ['./PDKSCreatingUserPlan.component.css']
})
export class PDKSCreatingUserPlanComponent implements OnInit, OnChanges {
  // public theBoundCallback: Function;
  // groupName: string;
  // groupForm : groupFormModel;
  // groupList : groupFormModel[];
  public theBoundCallback: Function;
  @Input('selectedData') selectedData: staffDTO; 
  userWorkList : workPlanForUserModels[];
  shiftAndPermissionType : userPlanTypeModel[];
  PERSONEL_ADI;
  kimlik;
  isPopupCreatingUserPlan;
  // workPlanForUser: string[];
  // workPlanForUserForm : userPlanTypeModel;
  // groupWorkList : userPlanTypeModel[];
  // selectedValues = selectedValue
  
  
  // isPopupCreatingStaff = false;
  // isPopupCreatingGroupPlan = false ;

  constructor(public userService : UserWorkPlanService ,  public shiftAndPermissionService : shiftAndPermissionServices ) { 
    // this.groupForm = groupService.getGroupFormInstance()
    that = this;
  }

  ngOnChanges(changes : SimpleChanges)
    {
      debugger
      this.PERSONEL_ADI = this.selectedData.PERSONEL_ADI
      this.kimlik = this.selectedData.Kimlik
      this.getUserWorkPlanList();
      this.getShiftAndPermissionType();
      this.theBoundCallback = this.theCallback.bind(this);
    };

  

  ngOnInit() 
    {  
    this.getShiftAndPermissionType();
    };


  // btnClear() { 
  //   let element = document.getElementById("myForm");
  //   let instance = Form.getInstance(element) as Form; 
  //   instance.resetValues(); //Formu Temizle
  // }
  //İzin Listesi Çekiliyor..
  getUserWorkPlanList(){
    this.userService.getworkPlanForUser(this.kimlik).subscribe(result =>{
      this.userWorkList = result;

    })
// this.groupService.getGroups().subscribe(result=>{
//   this.groupList=result;
  
// })
  }

  public theCallback(){
    this.isPopupCreatingUserPlan = false
    this.getUserWorkPlanList()
  }

  getShiftAndPermissionType(){
    this.shiftAndPermissionService.getWorkPlan().subscribe(result=>{
            this.shiftAndPermissionType=result
           
                            });
    }

  // getWorkGroupPlan(){
  //       this.workPlanForGroupService.getworkPlanForGroup(selectedValue).subscribe(result=>{
  //     this.groupWorkList=result;
  //   })
  //     }

  // public theCallback(){
    // this.getWorkGroupPlan();
    // this.isPopupCreatingGroupPlan = false
  // }
 

  //İzin Silme
//   Delete(e){
//     // this.groupService.deleteGroup(e.data).subscribe(result => {
//     //   this.getGroup()
//     //   this.getWorkGroupPlan()
//     //   this.groupName = ""
//           })
//   }

//   DeleteGroupWorkList(e){
//     this.workPlanForGroupService.deleteworkPlanForGroup(e.data).subscribe(result => {
//       this.getGroup()
//       this.getWorkGroupPlan()
//       this.groupName = ""
//           })
//   }
userForWorkPlan(e){
       this.isPopupCreatingUserPlan = true
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
                  hint: 'Personel Çalışma Planı Oluştur.',
                  onClick: this.userForWorkPlan.bind(this)
                  
                }
      }
    );
    // this.addButtonDefaultValue =1;
  }

  
//   groupForWorkPlan(e){
//     if (selectedValue > 0)
//     {
//         this.isPopupCreatingGroupPlan = true
        
//     }
//     else
//     {
//       Swal.fire({
//         type: 'error',
//         title: 'Hata...',
//         text: 'Grup Seçimi Yapmadınız!'
//         })
//     }
//                   }
                    
  
  // selectionChanged(e){
  //       debugger
  //       console.log(e);
        
  //       }
    

  updateUserWorkList(e){
    debugger
    console.log(this)
    // console.log(e)
    that.userService.saveworkPlanForUser(e.data,"").subscribe(result => {

    })
  }

  DeleteUserWorkList(e){
    this.userService.deleteworkPlanForUser(e.data).subscribe(result => {
    this.getUserWorkPlanList();
          })
  }


//         updateGroupWorkList(e){
//           debugger
//           console.log(e)
//           this.workPlanForGroupService.saveworkPlanForGroup(e.data,"").subscribe(result => {
            
//           })
//         }

// saveGroup(){   
//   debugger
//   console.log(this.groupForm)
//   console.log(this.groupForm.GRUP_ADI)
//   // console.log(this.groupName)  
//   let element = document.getElementById("myForm");
//   let instance = Form.getInstance(element) as Form; 
//   let result = instance.validate()
//   if (result.isValid) 
//   {
//     this.groupService.saveGroup(this.groupForm).subscribe(result => {
//       debugger
//       if (result["message"]=="Ok") {
//         notify({
//           message: "Kaydetme İşlemi Başarılı.",
//           position: {
//               my: "center top",
//               at: "center top"
//           }
//       }, "success", 1500); 
//       this.getGroup();
//       this.btnClear();
//       }
//       else{
//         notify({
//           message: "Kaydetme İşlemi Başarısız.",
//           position: {
//               my: "center top",
//               at: "center top"
//           }
//       }, "error", 1500); 
//       }
//     })
//   }

  

//   }
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