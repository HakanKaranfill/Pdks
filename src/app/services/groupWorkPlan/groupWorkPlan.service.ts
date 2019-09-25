import { Injectable } from '@angular/core';
import {workPlanForGroupModels} from '../../model/workPlanForGroupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


let workPlanForGroupModel : workPlanForGroupModels = {
kimlik :'',
TARIH : '',
ISLEM_ID :'',
VARDIYA_IZIN_ID : '',
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
// saveworkPlanForGroup(workPlanForGroupModel){
//   debugger
//     let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
//     let parameters = JSON.stringify({
//       workPlanForGroupModel : workPlanForGroupModel,
//       licanceNo:2402
//     });
//     let options = { headers: httpHeaders}; 
//     return this.http.put('http://localhost:5001/api/workPlanForGroup',parameters,options)
//     }


    getworkPlanForGroup(kimlik:number)

    {
      debugger
      return this.http.get<workPlanForGroupModels[]>('http://localhost:5001/api/workPlanForGroup/'+kimlik+'');
    }
}
