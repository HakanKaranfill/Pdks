import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import {montlyScheduleModel, montlyScheduleParam} from '../model/montlyScheduleModel';
import {MontlyScheduleService} from '../services/montlyScheduleServices/montlySchedule.service';
import Form from "devextreme/ui/form";
import { staffDTO } from 'src/app/model/staffModel'

@Component({
  selector: 'app-PDKSMontlySchedule',
  templateUrl: './PDKSMontlySchedule.component.html',
  styleUrls: ['./PDKSMontlySchedule.component.css']
})
export class PDKSMontlyScheduleComponent implements OnInit ,OnChanges {
  montlyList : montlyScheduleModel [];
  montlyParam : montlyScheduleParam;
  loadingVisible = true ;
  loadPanelMessage = "Veri Yükleniyor";
  // public theBoundCallback: Function;
  @Input('isPopupMonthlySchedule') isPopupMonthlySchedule: boolean;  
  constructor(public MontlyScheduleService : MontlyScheduleService) { 
    this.montlyParam = MontlyScheduleService.getMontlyParamFormInstance()
  }

  ngOnInit() {
   
  }
  onShown() {
    setTimeout(() => {
       // this.loadingVisible = false;
    }, 3000);
  }

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

  showLoadPanel() {

    this.loadingVisible = true;
  }
  btnClear() { 
    let element = document.getElementById("myForm1");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }

  onRowUpdated(e)
  {
    this.MontlyScheduleService.approvalSchedule(e.data.ONAY,e.data.PERHAR_ID,e.data.ACIKLAMA).subscribe(result=>{
      // this.show()
    })

  //  this.groupService.saveGroup(e.data).subscribe(result => {
    // this.getGroup()
    
  }

  show()
  
  {   
    let element = document.getElementById("myForm1");
    let instance = Form.getInstance(element) as Form; 
    let result = instance.validate()
    if (result.isValid) 
    {
      this.loadPanelMessage  = "Veriler Yükleniyor..."
      this.showLoadPanel();
      this.MontlyScheduleService.getMontlySchedule(this.montlyParam.startDate,this.montlyParam.endDate).subscribe(result=>{
        this.montlyList=result;
      })
      // this.btnClear();
      }
        
        
      
    
  
    }
  
  
  
}
