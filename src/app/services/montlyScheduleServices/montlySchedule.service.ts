import { Injectable } from '@angular/core';
import {montlyScheduleModel, montlyScheduleParam} from '../../model/montlyScheduleModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


let montlyScheduleModels : montlyScheduleModel = {
    SUBE : '',
    PERSONEL_ADI: '',
    TARIH: '',
    VARDIYA_IZIN: '',
    VARDIYA_A_ZAMAN: '',
    VARDIYA_K_ZAMAN: '',
    VARDIYA_TOPLAM : '',
    GIRIS_ZAMANI: '',
    CIKIS_ZAMANI: '',
    TOPLAM_CALISMA: '',
    ONAY: '',
    PER_ID: '',
    PERHAR_ID: '',
    MESAI: '',
    ACIKLAMA :''
  }

  let montlyParamModel : montlyScheduleParam = {
    startDate: '',
    endDate: ''  }

@Injectable({
  providedIn: 'root'
})
export class MontlyScheduleService {

constructor(private http : HttpClient) { }


getMontlyParamFormInstance()
{
return montlyParamModel; 

}


// deleteworkPlanForGroup(workPlanForGroupModel)
// {
//   debugger
//   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
//   let parameters = JSON.stringify({
//     workPlanForGroupModel : workPlanForGroupModel,
//     licanceNo:2402
//   });
//   let options = { headers: httpHeaders,
//   body:parameters }; 
//   return this.http.delete('http://localhost:5001/api/workPlanForGroup',options)
// }

// saveworkPlanForGroup(workPlanForGroupModelsFrm,selectData){
//     let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
//     let parameters = JSON.stringify({
//       workPlanForGroupModelsFrm : workPlanForGroupModelsFrm,
//       selectData : selectData,      
//       licanceNo:2402
//     });
//     let options = { headers: httpHeaders}; 
//     return this.http.put('http://localhost:5001/api/workPlanForGroup',parameters,options)
//     }


    getMontlySchedule(startDate:string,endDate:string)

    
    {
      debugger

      let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
          let parameters = JSON.stringify({
            startDate : startDate,
            endDate : endDate,      
            licanceNo:2402
          });
          let options = { headers: httpHeaders}; 
          // return this.http.get<montlyScheduleModel[]>('http://localhost:5001/api/group');
          return this.http.post<montlyScheduleModel[]>('http://localhost:5001/api/montlySchedule',parameters,options);
    }


    approvalSchedule(approval:boolean,perharID:string,description:string, loginUser:string)
    {
      let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
          let parameters = JSON.stringify({
            approval : approval,
            perharID : perharID,
            description : description,  
            licanceNo : 2402,
            loginUser : loginUser
          });
          let options = { headers: httpHeaders}; 
          // return this.http.get<montlyScheduleModel[]>('http://localhost:5001/api/group');
          return this.http.post('http://localhost:5001/api/montlySchedule',parameters,options);
    }
}
