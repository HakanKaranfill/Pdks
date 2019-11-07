import { Injectable } from '@angular/core';
import {groupFormModel,controlModel} from '../../model/groupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { workPlanForGroupModels } from 'src/app/model/workPlanForGroupModel';
import {Observable,of, from } from 'rxjs';
import {UserService} from '../loginServices/user.service'
import { userPlanTypeModel } from 'src/app/model/workPlanForUser';
let groupModel : groupFormModel = {
  kimlik:0,
  GRUP_ADI: '',
  SUBE_KODU : ''
  }


@Injectable({
  providedIn: 'root'
})
export class groupServiceService {

constructor(private http : HttpClient, public _userService : UserService) { }


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
      licanceId : this._userService.userLicances[0].licanceId,
      companyCode : this._userService.userLicances[0].companyCode
    });
    let options = { headers: httpHeaders}; 
    return this.http.put('http://localhost:5001/api/group',parameters,options)
    }

    getGroups()
    // {
    //   return this.http.get<groupFormModel[]>('http://localhost:5001/api/group');
    // }
    {
      let httpHeaders = new HttpHeaders().set('Content-Type','application/json')
      let parameters = JSON.stringify({
          licanceId : this._userService.userLicances[0].licanceId,
          companyCode : this._userService.userLicances[0].companyCode
      });
      let options = {headers : httpHeaders};
      return this.http.post<groupFormModel[]>('http://localhost:5001/api/group',parameters,options)
     }

  
    getGroupControl(kimlik:number)

    {
      
      return this.http.get<controlModel[]>('http://localhost:5001/api/group/'+kimlik+'');
     
    }


  //   public getGroups(): Observable<groupFormModel[]> {
  //     return this.http.get<groupFormModel[]>(`api/group`);
  // }
  
  

   
    
}

