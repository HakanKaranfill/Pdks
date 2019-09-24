import { Component, OnInit } from '@angular/core';
import Form from "devextreme/ui/form";
import {shiftFormModel} from '../model/shiftFormModel';
import {shiftServiceService} from '../services/shiftService/shiftService.service'
import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';



@Component({
  selector: 'app-PDKSTheShiftPlan',
  templateUrl: './PDKSTheShiftPlan.component.html',
  styleUrls: ['./PDKSTheShiftPlan.component.css']
})
export class PDKSCreateShiftComponent implements OnInit {
  
  shift: string[];
  shiftForm : shiftFormModel;
  shiftList : shiftFormModel[];

  
  isPopupCreatingStaff = false;

  constructor(public shiftService : shiftServiceService) { 
    this.shiftForm = shiftService.getShiftFormInstance()
   
  }

  ngOnInit() {

this.getShift();
  }
  btnClear() { 
    let element = document.getElementById("myForm");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }
  //İzin Listesi Çekiliyor..
  getShift(){
this.shiftService.getShifts().subscribe(result=>{
  this.shiftList=result;
})
  }

  //İzin Silme
  Delete(e){
    debugger
    console.log('delete')
    this.shiftService.deleteShift(e.data).subscribe(result => {
      this.getShift()
          })
  }
  isPopupCreatingShift(){}
  onClickDelete()
  {
    
  }
  Update(e){
    debugger
    console.log(e)
    this.shiftService.saveShift(e.data).subscribe(result => {
this.getShift()
    })
  }
saveShift(){   
  console.log(this.shiftForm)
  let element = document.getElementById("myForm");
  let instance = Form.getInstance(element) as Form; 
  let result = instance.validate()
  if (result.isValid) 
  {
    this.shiftService.saveShift(this.shiftForm).subscribe(result => {
      debugger
      if (result["message"]=="Ok") {
        notify({
          message: "Kaydetme İşlemi Başarılı.",
          position: {
              my: "center top",
              at: "center top"
          }
      }, "success", 1500); 
      this.getShift();
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