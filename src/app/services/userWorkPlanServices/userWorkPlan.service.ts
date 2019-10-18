import { Injectable } from '@angular/core';
import {workPlanForUserModels,workPlanForUserModelsFrom} from '../../model/workPlanForUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { workPlanTypeModel } from 'src/app/model/workPlanForGroupModel';



let workPlanForUserModel : workPlanForUserModels = {
  kimlik : '',
  TARIH: '',
  PER_ID: '',
  VARDIYA_IZIN_ID: ''
  }

  let  workPlanForUserModelFrom : workPlanForUserModelsFrom = {
    monday : '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
    startDate: '',
    endDate: '',
    groupID: '',
    }



@Injectable({
  providedIn: 'root'
})
export class UserWorkPlanService {

constructor(private http : HttpClient) { }
getWorkPlanForUserFormInstance()
{
return workPlanForUserModelFrom;
}


deleteworkPlanForUser(workPlanForUserModel)
{
  debugger
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    workPlanForUserModel : workPlanForUserModel,
    licanceNo:2402
  });
  let options = { headers: httpHeaders,
  body:parameters }; 
  return this.http.delete('http://localhost:5001/api/workPlanForUser',options)


}

saveworkPlanForUser(workPlanForUserModelsFrm,selectData){
  // console.log(selectData)
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    workPlanForUserModelsFrm : workPlanForUserModelsFrm,
    selectData : selectData,      
    licanceNo:2402
  });
  let options = { headers: httpHeaders}; 
  return this.http.put('http://localhost:5001/api/workPlanForUser',parameters,options)
  }



    getworkPlanForUser(kimlik:number)

    {
        debugger
      return this.http.get<workPlanForUserModels[]>('http://localhost:5001/api/workPlanForUser/'+kimlik+'');
      // debugger
      // console.log(workPlanForUserModels)
    }
}
