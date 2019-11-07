import { Injectable } from '@angular/core';
import {titleModels} from '../../model/titleModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserService} from '../loginServices/user.service'
let titleModel : titleModels = {
  kimlik:0,
  UNVAN_ADI: '',
  SUBE_KODU :''
  }

@Injectable({
  providedIn: 'root'
})
export class TitleServicesService {

constructor(private http : HttpClient, public _userService : UserService) { }


getTitleFormInstance()
{
return titleModel;
}


deleteTitle(kimlik)
{
  debugger
  console.log(kimlik)
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    kimlik : kimlik,
    licanceId:2402
  });
  let options = { headers: httpHeaders,
  body:parameters }; 
  return this.http.delete('http://localhost:5001/api/title',options)
}

saveTitle(titleModel){
  debugger
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      titleModel : titleModel,
      licanceId : this._userService.userLicances[0].licanceId,
      companyCode : this._userService.userLicances[0].companyCode
    });
    let options = { headers: httpHeaders}; 
    return this.http.put('http://localhost:5001/api/title',parameters,options)
    }
    

getTitle()
{
let httpHeaders = new HttpHeaders().set('Content-Type','application/json')
let parameters = JSON.stringify({
    licanceId : this._userService.userLicances[0].licanceId,
    companyCode : this._userService.userLicances[0].companyCode
});
let options = {headers : httpHeaders};
return this.http.post<titleModels[]>('http://localhost:5001/api/title',parameters,options)
  // let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  //         let parameters = JSON.stringify({
  //           licanceNo: this._userService.userLicances[0].licanceId,
  //           companyCode : this._userService.userLicances[0].companyCode,
  //           status : 1
  //         });
  //         let options = { headers: httpHeaders}; 
  //         // return this.http.get<montlyScheduleModel[]>('http://localhost:5001/api/group');
  //         return this.http.post<staffDTO[]>('http://localhost:5001/api/staff',parameters,options);
  return this.http.get<titleModels[]>('http://localhost:5001/api/title');
  
}

  
    // getGroupControl(kimlik:number)

    // {
      
    //   return this.http.get<controlModel[]>('http://localhost:5001/api/group/'+kimlik+'');
     
    // }


  //   public getGroups(): Observable<groupFormModel[]> {
  //     return this.http.get<groupFormModel[]>(`api/group`);
  // }
  
  

   
    
}

