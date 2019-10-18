import { Injectable } from '@angular/core';
import {workPlanForGroupModels,workPlanForGroupModelsFrom} from '../../model/workPlanForGroupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


let workPlanForGroupModel : workPlanForGroupModels = {
  kimlik : '',
  TARIH: '',
  ISLEM_ID: '',
  VARDIYA_IZIN_ID: ''
  }

  let  workPlanForGroupModelFrom : workPlanForGroupModelsFrom = {
    groupID : '',
    monday : '',
    tuesday : '',
    wednesday : '',
    thursday : '',
    friday : '',
    saturday : '',
    sunday : '',
    startDate : '',
    endDate : ''
    }

  



@Injectable({
  providedIn: 'root'
})
export class workPlanForGroupService {

constructor(private http : HttpClient) { }


getGroupFormInstance()
{
return workPlanForGroupModel; 

}

getWorkPlanForGroupInstance()
{
return workPlanForGroupModelFrom;

}

deleteworkPlanForGroup(workPlanForGroupModel)
{
  debugger
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    workPlanForGroupModel : workPlanForGroupModel,
    licanceNo:2402
  });
  let options = { headers: httpHeaders,
  body:parameters }; 
  return this.http.delete('http://localhost:5001/api/workPlanForGroup',options)
}

saveworkPlanForGroup(workPlanForGroupModelsFrm,selectData){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      workPlanForGroupModelsFrm : workPlanForGroupModelsFrm,
      selectData : selectData,      
      licanceNo:2402
    });
    let options = { headers: httpHeaders}; 
    return this.http.put('http://localhost:5001/api/workPlanForGroup',parameters,options)
    }


    getworkPlanForGroup(kimlik:number)

    {
      
      return this.http.get<workPlanForGroupModels[]>('http://localhost:5001/api/workPlanForGroup/'+kimlik+'');
      debugger
      console.log(workPlanForGroupModels)
    }
}
