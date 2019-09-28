import { Component, OnInit, Input } from '@angular/core';
import {workPlanTypeModel,workPlanForGroupModelsFrom} from '../model/workPlanForGroupModel';
import {workPlanForGroupService} from '../services/groupWorkPlan/groupWorkPlan.service'
import {shiftAndPermissionServices} from '../services/shiftAndPermissionServices/shiftAndPermissionServices.service'
import Form from "devextreme/ui/form";

// import {permissonFormModel,permissionTypeModel} from '../model/permissionFormModel';
// import {PermissionServiceService} from '../services/permissonServices/permissionService.service'
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
import { debug } from 'util';



@Component({
  selector: 'app-PDKSCreatingGroupPlan',
  templateUrl: './PDKSCreatingGroupPlan.component.html',
  styleUrls: ['./PDKSCreatingGroupPlan.component.css']
})
export class PDKSCreatingGroupPlanComponent implements OnInit {
  @Input('selectedData') selectedData: workPlanTypeModel; 
  shiftAndPermissionType : workPlanTypeModel[];
  saveCreatingGroupPlanForm : workPlanForGroupModelsFrom;

  public theBoundCallback: Function;
  @Input()  public myCallback: Function; 

  constructor( public workPlanForGroupService : workPlanForGroupService , public shiftAndPermissionService : shiftAndPermissionServices ) {  
    this.saveCreatingGroupPlanForm = workPlanForGroupService.getWorkPlanForGroupInstance()
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

    
      

      saveCreatingGroupPlan(){   
        console.log(this.saveCreatingGroupPlanForm)
        let element = document.getElementById("myForm1");
        let instance = Form.getInstance(element) as Form; 
        let result = instance.validate()
        if (result.isValid) 
        {
          this.workPlanForGroupService.saveworkPlanForGroup(this.saveCreatingGroupPlanForm,this.selectedData).subscribe(result => {
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



