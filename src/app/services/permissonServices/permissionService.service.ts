import { Injectable } from '@angular/core';
import {permissonFormModel,permissionTypeModel,controlModel} from '../../model/permissionFormModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// let ctrlModel : controlModel = {
//   control : 0 ,
//   }
let permissonModel : permissonFormModel = {
  Kimlik:'',
  permissionName: '',
  type: '',
  }

  let permissionTypes : permissionTypeModel[] = [
    {
      value :'Ücretsiz',
      name : 'Ücretsiz'
    },
    {
      value :'Ücretli',
      name : 'Ücretli'
    }
  ]

@Injectable({
  providedIn: 'root'
})
export class PermissionServiceService {

constructor(private http : HttpClient) { }


getPermissionFormInstance()
{
return permissonModel;
}


getPermissionTypes() 
{
  return permissionTypes;
}
deletePermission(permissonModel)
{
  debugger
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    permissionModel : permissonModel,
    licanceNo:2402
  });
  let options = { headers: httpHeaders,
  body:parameters }; 
  return this.http.delete('http://localhost:5001/api/permission',options)
}
savePermission(permissonModel){
  debugger
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      permissionModel : permissonModel,
      licanceNo:2402
    });
    let options = { headers: httpHeaders}; 
    debugger
    console.log(parameters,options)
    
    return this.http.put('http://localhost:5001/api/permission',parameters,options)
    }

    getPermissions()
    {
      return this.http.get<permissonFormModel[]>('http://localhost:5001/api/permission');
    }


    
    getPermissionsControl(kimlik:number)

    {
      
      return this.http.get<controlModel[]>('http://localhost:5001/api/permission/'+kimlik+'');
     
    }
}
