import { Injectable } from '@angular/core';
import {groupFormModel} from '../../model/groupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { workPlanForGroupModels } from 'src/app/model/workPlanForGroupModel';
import {Observable,of, from } from 'rxjs';
let groupModel : groupFormModel = {
  kimlik:'',
  GRUP_ADI: 0
  }


@Injectable({
  providedIn: 'root'
})
export class groupServiceService {

constructor(private http : HttpClient) { }


getGroupFormInstance()
{
return groupModel;
}


deleteGroup(groupModel)
{
  debugger
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    groupModel : groupModel,
    licanceNo:2402
  });
  let options = { headers: httpHeaders,
  body:parameters }; 
  return this.http.delete('http://localhost:5001/api/group',options)
}
saveGroup(groupModel){
  debugger
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      groupModel : groupModel,
      licanceNo:2402
    });
    let options = { headers: httpHeaders}; 
    return this.http.put('http://localhost:5001/api/group',parameters,options)
    }

    getGroups()
    {
      return this.http.get<groupFormModel[]>('http://localhost:5001/api/group');
     
    }



  //   public getGroups(): Observable<groupFormModel[]> {
  //     return this.http.get<groupFormModel[]>(`api/group`);
  // }
  
  

   
    
}

