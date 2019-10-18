import { Injectable } from '@angular/core';
import {workPlanTypeModel} from '../../model/workPlanForGroupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let workPlanTypes : workPlanTypeModel = {
  kimlik:'',
  ADI:''
  }
  
@Injectable({
  providedIn: 'root'
})
export class shiftAndPermissionServices {

constructor(private http : HttpClient) { }




    getWorkPlan()
    {
      
        
      return this.http.get<workPlanTypeModel[]>('http://localhost:5001/api/shiftAndPermission');
    
    }


}
