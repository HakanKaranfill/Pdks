import { Injectable } from '@angular/core';
import {shiftFormModel} from '../../model/shiftFormModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let shiftModel : shiftFormModel = {
  Kimlik:'',
  shiftName: '',
  sDate: '',
  eDate: ''
  }


@Injectable({
  providedIn: 'root'
})
export class shiftServiceService {

constructor(private http : HttpClient) { }


getShiftFormInstance()
{
return shiftModel;
}


deleteShift(shiftModel)
{
  debugger
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  let parameters = JSON.stringify({
    shiftModel : shiftModel,
    licanceNo:2402
  });
  let options = { headers: httpHeaders,
  body:parameters }; 
  return this.http.delete('http://localhost:5001/api/shift',options)
}
saveShift(shiftModel){
  debugger
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      shiftModel : shiftModel,
      licanceNo:2402
    });
    let options = { headers: httpHeaders}; 
    return this.http.put('http://localhost:5001/api/shift',parameters,options)
    }

    getShifts()
    {
      return this.http.get<shiftFormModel[]>('http://localhost:5001/api/shift');
    }
}
