import { NgModule, Component, OnInit, ViewChild, enableProdMode } from '@angular/core';
// import { LayoutService } from '../../Services/Layout/Layout.service';
// import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule, DxTreeViewComponent } from 'devextreme-angular';
import { MenuDTO } from 'src/app/model/MenuDTO';
import { Routes, RouterModule, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/loginServices/user.service';

var that;

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.css'],

})

export class LayoutComponent implements OnInit {
//    @ViewChild(DxDrawerComponent) drawer: DxDrawerComponent;
  items: any;
  navigation: MenuDTO[];
  currentItem: MenuDTO;
  showSubmenuModes: string[] = ['slide', 'expand'];
  positionModes: string[] = ['left', 'right'];
  showModes: string[] = ['push', 'shrink', 'overlap'];
  selectedOpenMode: string = 'overlap';
  selectedPosition: string = 'left';
  selectedRevealMode: string = 'slide';
  elementAttr: any;
  fullMenuItem = "";
  itemsDemo: any[];
  time =""
//   private service: LayoutService,
  constructor( private router: Router, public translate: TranslateService, public _userService: UserService, private _router: Router) {
    // this.navigation = service.getNavigationList()
    translate.setDefaultLang('tr');
    that = this;
    // this.itemsDemo = [{ text: 'Yeni Sekmede Aç' }];
    this.rememberMe();
  }

  ngOnInit() {
    RouterModule;
    setInterval(() => {
      this.time = new Date().toLocaleString()
   }, 1000);
   
  }

  itemClick(e) {
    if (e.itemData.text) {
      window.open(window.location.origin + '/#/Layout/' + this.currentItem.path, "_blank");
    }
  }
  selectItem(e){}
  rememberMe() {
    this._userService.rememberMe();
  }


//   selectItem(e) {
//     if (e != null && e != undefined && e.itemData != null && e.itemData != undefined && e.itemData.path != "#") {
//       this.currentItem = e.itemData;
//       var ids = this.currentItem.id.split("_");
//       var tempMenu;
//       var mainMenuID;

//       for (let i = 0; i < ids.length; i++) {
//         if (tempMenu == undefined) {
//           tempMenu = this.navigation.filter(x => x.id == ids[i])[0];
//           that.fullMenuItem = tempMenu.text + " > ";
//           mainMenuID = ids[i];

//         }
//         else {
//           mainMenuID += "_" + ids[i];
//           tempMenu = tempMenu.items.filter(x => x.id == mainMenuID)[0];
//           that.fullMenuItem += tempMenu.text;
//           if (i < ids.length - 1)
//             that.fullMenuItem += " > ";
//         }
//       }
//       this.router.navigate(['/Layout/' + this.currentItem.path])
//     }
//   }

  toolbarContent =
    [

      {
        location: 'before',
        template: () => {
          return '<img src="http://test.kerzzcloud.com/Container/images/PDKSLOGO.svg" width="190px">';
        }
      },

      {
        location: 'after',
        template: () => {
          return 'Hoşgeldiniz, ' + this._userService.userName + ' ' + this._userService.userSurname+ ' ' + this._userService.userLicances[0].licanceId+ ' ' + this._userService.userLicances[0].companyCode ;
          console.log(this._userService)
        }
      },
      {
        style : 'margin-top: 12px',
        location: 'after',
        widget: 'dxButton',
        locateInMenu: 'auto',
        options: {
          icon: 'fa fa-sign-out',
          
          onClick: () => {
            this.logout();
          }
        }
      },
    //   {
    //     locateInMenu: 'always',
    //     widget: 'dxButton',
    //     options: {
    //       text: 'TR',
    //       onClick: () => {
    //         this.useLanguage('tr');
    //       }
    //     }
    //   },
    //   {
    //     locateInMenu: 'always',
    //     widget: 'dxButton',
    //     options: {
    //       text: 'EN',
    //       onClick: () => {
    //         this.useLanguage('en');
    //       }
    //     }
    //   }
    ];

  logout() {
    this._userService.logout();
    this._router.navigate(['/Login']);
  }

  useLanguage(lan: string) {
    this._userService.useLanguage(lan);
  }


}
