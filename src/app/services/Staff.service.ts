import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
