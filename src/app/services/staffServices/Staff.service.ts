import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { staffDTO } from 'src/app/model/staffModel'
import { UserService } from '../loginServices/user.service';



@Injectable({
  providedIn: 'root'
})
export class StaffService {

constructor(private http: HttpClient, public _userService : UserService) {
 }

 getServiceStaffList(){
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
          let parameters = JSON.stringify({
            licanceId: this._userService.userLicances[0].licanceId,
            companyCode : this._userService.userLicances[0].companyCode,
            status : 1
          });
          let options = { headers: httpHeaders}; 
          // return this.http.get<montlyScheduleModel[]>('http://localhost:5001/api/group');
          return this.http.post<staffDTO[]>('http://localhost:5001/api/staff',parameters,options);
 }

 //this._userService.userLicances[0].licanceId+ ' ' + this._userService.userLicances[0].companyCode ;
 updateStaff(staffModel){
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    let parameters = JSON.stringify({
      staffModel : staffModel,
      licanceId: this._userService.userLicances[0].licanceId
    });
    let options = { headers: httpHeaders}; 
    console.log(parameters)
    return this.http.put('http://localhost:5001/api/staff',parameters,options)
    }
}
