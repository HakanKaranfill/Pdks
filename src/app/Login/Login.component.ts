import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Router } from '@angular/router';
import { UserService } from '../services/loginServices/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * An object representing the user for the login form
   */
  public user: any;

  buttonOptions: any = {
    text: "Giriş",
    type: "success",
    useSubmitBehavior: true
  }

  constructor(private _router:Router, public _userService: UserService) { }

  ngOnInit() {
    this.user = {
      userName: '',
      password: '',
      requester: ''
    };
    this._userService.rememberMe();

    if (this._userService.token)
    {
      notify({
        message: "Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.",
        position: {
            my: "center bottom",
            at: "center bottom"
        }
      }, "success", 2000);
      this._router.navigate(['/Layout/PDKSList']);  
    }
  }

  onFormSubmit = function(e) {
    this._userService.login({userName: this.user.userName, password: this.user.password, requester: "herkul-service"});
    e.preventDefault();
  }


 
}
