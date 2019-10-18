import { Component, OnInit, Input } from '@angular/core';
// import {workPlanTypeModel,workPlanForGroupModelsFrom} from '../model/workPlanForGroupModel';
// import {workPlanForGroupService} from '../services/groupWorkPlan/groupWorkPlan.service'
import {UserWorkPlanService} from '../services/userWorkPlanServices/userWorkPlan.service'
import {userPlanTypeModel,workPlanForUserModelsFrom} from '../model/workPlanForUser';
import {shiftAndPermissionServices} from '../services/shiftAndPermissionServices/shiftAndPermissionServices.service'
import Form from "devextreme/ui/form";
// import {permissonFormModel,permissionTypeModel} from '../model/permissionFormModel';
// import {PermissionServiceService} from '../services/permissonServices/permissionService.service'
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
import { debug } from 'util';
import { VirtualTimeScheduler } from 'rxjs';



@Component({
  selector: 'app-PDKSCreatingUserPlanAction',
  templateUrl: './PDKSCreatingUserPlanAction.component.html',
  styleUrls: ['./PDKSCreatingUserPlanAction.component.css']
})
export class PDKSCreatingUserPlanActionComponent implements OnInit {
  @Input('selectedData') selectedData: userPlanTypeModel; 
  shiftAndPermissionType : userPlanTypeModel[];
  saveCreatingUserPlanForm : workPlanForUserModelsFrom 

  public theBoundCallback: Function;
  @Input()  public myCallback: Function; 
  constructor( public UserWorkPlanService : UserWorkPlanService , public shiftAndPermissionService : shiftAndPermissionServices) {  
    this.saveCreatingUserPlanForm = UserWorkPlanService.getWorkPlanForUserFormInstance();
    // this.shiftAndPermissionType = shiftAndPermissionService.getWorkPlan();
    // this.btnClear()
   }
   


    ngOnInit() {
                  this.getShiftAndPermissionType()
                  
            }
  btnClear() { 
    let element = document.getElementById("myForm1");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }            
              
  
  getShiftAndPermissionType(){
      this.shiftAndPermissionService.getWorkPlan().subscribe(result=>{
              this.shiftAndPermissionType=result
             
                              });
      }

    
      

      saveCreatingUserPlan(){   
        let element = document.getElementById("myForm1");
        let instance = Form.getInstance(element) as Form; 
        let result = instance.validate()
        if (result.isValid) 
        {
          this.UserWorkPlanService.saveworkPlanForUser(this.saveCreatingUserPlanForm,this.selectedData).subscribe(result => {
            console.log(result["message"])
            if (result["message"]=="Ok") {
              notify({
                message: "Kaydetme İşlemi Başarılı.",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 1500); 
            // this.getPermissions();
            
            this.btnClear(); 
            this.myCallback();
            
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



