import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import {montlyScheduleModel, montlyScheduleParam} from '../model/montlyScheduleModel';
import {MontlyScheduleService} from '../services/montlyScheduleServices/montlySchedule.service';
import Form from "devextreme/ui/form";
import { staffDTO } from 'src/app/model/staffModel'
import {UserService} from '../services/loginServices/user.service'

@Component({
  selector: 'app-PDKSMontlySchedule',
  templateUrl: './PDKSMontlySchedule.component.html',
  styleUrls: ['./PDKSMontlySchedule.component.css']
})
export class PDKSMontlyScheduleComponent implements OnInit ,OnChanges {
  montlyList : montlyScheduleModel [];
  montlyParam : montlyScheduleParam;
  loadingVisible = true ;
  // loadPanelMessage = "Veri Yükleniyor";
  loginName = ""
  // public theBoundCallback: Function;
  @Input('isPopupMonthlySchedule') isPopupMonthlySchedule: boolean;  
  constructor(public MontlyScheduleService : MontlyScheduleService, public UserService : UserService) { 
    this.montlyParam = MontlyScheduleService.getMontlyParamFormInstance()
    this.loginName = UserService.userName +' '+ UserService.userSurname
    
  }

  ngOnInit() {
   
  }
  // onShown() {
  //   setTimeout(() => {
  //      // this.loadingVisible = false;
  //   }, 3000);
  // }

  ngOnChanges(changes : SimpleChanges){
    debugger
    // this.theBoundCallback = this.theCallback.bind(this);
    this.btnClear()
    this.montlyList = null
  }

  // public theCallback(){
  //   this.isPopupMonthlySchedule = false  
  // }

  onHidden() {
  }

  // showLoadPanel() {

  //   this.loadingVisible = true;
  // }
  btnClear() { 
    let element = document.getElementById("myForm1");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }

  onRowUpdated(e)
  {
    this.MontlyScheduleService.approvalSchedule(e.data.ONAY,e.data.PERHAR_ID,e.data.ACIKLAMA, this.loginName).subscribe(result=>{
    // this.show()
  })

  }

  show()
  
  {   
  
    let element = document.getElementById("myForm1");
    let instance = Form.getInstance(element) as Form; 
    let result = instance.validate()
    if (result.isValid) 
    {
      // this.loadPanelMessage  = "Veriler Yükleniyor..."
      // this.showLoadPanel();
      this.MontlyScheduleService.getMontlySchedule(this.montlyParam.startDate,this.montlyParam.endDate).subscribe(result=>{
        this.montlyList=result;
        // this.loadingVisible = false;
      })

      // this.btnClear();
      }
  
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
  
}
