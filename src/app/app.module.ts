import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { LayoutComponent } from './Layout/Layout.component';
import { PDKSListComponent } from './PDKSList/PDKSList.component';
import { PDKSFormComponent } from './PDKSForm/PDKSForm.component';
import { DevExtremeModules } from './DevExtreme.module'
import { PDKSCreatePermissionComponent } from './PDKSCreatePermission/PDKSCreatePermission.component';
import { PDKSCreateShiftComponent } from './PDKSTheShiftPlan/PDKSTheShiftPlan.component';
import { PDKSGroupWorkPlanComponent } from './PDKSGroupWorkPlan/PDKSGroupWorkPlan.component';
import { PDKSCreatingGroupPlanComponent } from './PDKSCreatingGroupPlan/PDKSCreatingGroupPlan.component';
import { PDKSCreatingUserPlanComponent } from './PDKSCreatingUserPlan/PDKSCreatingUserPlan.component';
import { HttpClientModule, HttpInterceptor,HttpHandler } from '@angular/common/http';

const appRoutes: Routes = [
   { path: 'Login', component: LoginComponent },
   { path: '', redirectTo: 'Login', pathMatch: 'full' },
   {
     path: 'Layout', component: LayoutComponent,
     children:
       [
         {
           path: 'PDKSList', component: PDKSListComponent,
         //   children:
         //     [
         //       { path: 'PDKSForm', component: PDKSFormComponent },
         //       { path: 'PDKSCreatePermission', component: PDKSCreatePermissionComponent },
         //     ]
             
         }
       ]
       
   }
]



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      LayoutComponent,
      PDKSListComponent,
      PDKSFormComponent,
      PDKSCreatePermissionComponent,
      PDKSCreateShiftComponent,
      PDKSGroupWorkPlanComponent,
      PDKSCreatingGroupPlanComponent,
      PDKSCreatingUserPlanComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DevExtremeModules,
      HttpClientModule,
    
      RouterModule.forRoot(appRoutes, {useHash:true
})
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
   providers: [
      
   ],
   bootstrap: [
      AppComponent
   ]
})
 
 export class AppModule { }