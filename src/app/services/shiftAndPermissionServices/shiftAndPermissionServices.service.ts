import { Injectable } from '@angular/core';
import {workPlanTypeModel} from '../../model/workPlanForGroupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let workPlanTypes : workPlanTypeModel = {
  kimlik:'',
  ADI:''
  }

  // let workPlanTypes : workPlanTypeModel[] = [
  //   {
  //     value :'Ücretsiz',
  //     name : 'Ücretsiz'
  //   },
  //   {
  //     value :'Ücretli',
  //     name : 'Ücretli'
  //   }
  // ]

@Injectable({
  providedIn: 'root'
})
export class shiftAndPermissionServices {

constructor(private http : HttpClient) { }

// getworkPlanTypes() 
// {
//   return workPlanTypes;
// }

// getPermissionFormInstance()
// {
// // return permissonModel;
// }


// getWorkPlanTypes() 
// {
//   return workPlanTypes;
// }
// deletePermission(permissonModel)
// {
//   debugger
//   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
//   let parameters = JSON.stringify({
//     permissionModel : permissonModel,
//     licanceNo:2402
//   });
//   let options = { headers: httpHeaders,
//   body:parameters }; 
//   return this.http.delete('http://localhost:5001/api/permission',options)
// }
// savePermission(permissonModel){
//   debugger
//     let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
//     let parameters = JSON.stringify({
//       permissionModel : permissonModel,
//       licanceNo:2402
//     });
//     let options = { headers: httpHeaders}; 
//     return this.http.put('http://localhost:5001/api/permission',parameters,options)
//     }

    getWorkPlan()
    {
      
        
      return this.http.get<workPlanTypeModel[]>('http://localhost:5001/api/shiftAndPermission');
      debugger
      console.log(workPlanTypeModel)
    }


}
