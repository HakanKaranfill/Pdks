import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import {montlyScheduleModel, montlyScheduleParam} from '../model/montlyScheduleModel';
import {MontlyScheduleService} from '../services/montlyScheduleServices/montlySchedule.service';
import Form from "devextreme/ui/form";
import { staffDTO } from 'src/app/model/staffModel'
import {UserService} from '../services/loginServices/user.service'

@Component({
  selector: 'app-PDKSMontlyReport',
  templateUrl: './PDKSMontlyReport.component.html',
  styleUrls: ['./PDKSMontlyReport.component.css']
})
export class PDKSMontlyReportComponent implements OnInit, OnChanges {
  montlyList : montlyScheduleModel [];
  montlyParam : montlyScheduleParam;
  @Input('isPopupMonthlyReport') isPopupMonthlyReport: boolean;  
  constructor(public MontlyScheduleService : MontlyScheduleService, public UserService : UserService) { 
    this.montlyParam = MontlyScheduleService.getMontlyParamFormInstance()
    
  }

  ngOnInit() {
  }
  ngOnChanges(changes : SimpleChanges) {
    this.btnClear()
    this.montlyList = null
  }


  btnClear() { 
    let element = document.getElementById("myForm1");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }
  onCellPrepared(e){
    if(e.rowType === 'data') {
        if(e.data.ONAY === true) {
          // e.cellElement.style.color = '#AAAAAA';
          e.cellElement.style.backgroundColor = '#70cf8096';
          e.cellElement.style.color = '#000000';
        }
        else{
          e.cellElement.style.color = '#AAAAAA'
        }
        // if(e.data.SaleAmount > 15000) {
        //   if(e.column.dataField === 'OrderNumber') {
        //     e.cellElement.style.fontWeight = 'bold';
        //   }
        //   if(e.column.dataField === 'SaleAmount') {
        //     e.cellElement.style.backgroundColor = '#FFBB00';
        //     e.cellElement.style.color = '#000000';
        //   }
        // }
    }
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

}
