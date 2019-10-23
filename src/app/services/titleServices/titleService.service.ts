import { Injectable } from '@angular/core';
import {titleModels} from '../../model/titleModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let titleModel : titleModels = {
  kimlik:0,
  UNVAN_ADI: ''
  }

@Injectable({
  providedIn: 'root'
})
export class TitleServicesService {

constructor(private http : HttpClient) { }


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
    licanceNo:2402
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
      licanceNo:2402
    });
    let options = { headers: httpHeaders}; 
    debugger 
    console.log(parameters)
    return this.http.put('http://localhost:5001/api/title',parameters,options)
    }
    

getTitle()
{
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

