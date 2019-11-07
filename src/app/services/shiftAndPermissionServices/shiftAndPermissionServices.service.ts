import { Injectable } from '@angular/core';
import {workPlanTypeModel} from '../../model/workPlanForGroupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserService} from '../loginServices/user.service'

let workPlanTypes : workPlanTypeModel = {
  kimlik:0,
  ADI:'',
  SUBE_KODU:''
  }
  
@Injectable({
  providedIn: 'root'
})
export class shiftAndPermissionServices {

constructor(private http : HttpClient, public _userService : UserService) { }




    getWorkPlan()
    // {
         //   return this.http.get<workPlanTypeModel[]>('http://localhost:5001/api/shiftAndPermission');
        // }
        {
          let httpHeaders = new HttpHeaders().set('Content-Type','application/json')
          let parameters = JSON.stringify({
              licanceId : this._userService.userLicances[0].licanceId,
              companyCode : this._userService.userLicances[0].companyCode
          });
          let options = {headers : httpHeaders};
          return this.http.post<workPlanTypeModel[]>('http://localhost:5001/api/shiftAndPermission',parameters,options)
         }

}
