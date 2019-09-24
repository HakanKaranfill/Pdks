import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { staffDTO } from 'src/app/model/staffModel'

@Injectable({
  providedIn: 'root'
})
export class StaffService {

constructor(private http: HttpClient) {
 }

 getServiceStaffList(){
  debugger
  let   geturl='http://localhost:5001/api/staff';
  return this.http.get<staffDTO[]>(geturl)
 }
 updateStaff(staffModel){
  debugger
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      staffModel : staffModel,
      licanceNo:2402
    });
    let options = { headers: httpHeaders}; 
    return this.http.put('http://localhost:5001/api/staff',parameters,options)
    }
}
