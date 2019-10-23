
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DxTextBoxModule
    ,DxValidatorModule
    ,DxButtonModule
    ,DxToolbarModule
    ,DxDataGridModule
    ,DxBulletModule
    ,DxListModule
    ,DxValidationSummaryModule
    ,DxValidationGroupModule
    ,DxPopupModule
    ,DxScrollViewModule
    ,DxLookupModule
    ,DxDateBoxModule
    ,DxCheckBoxModule
    ,DxFormModule
    ,DxCalendarModule
    ,DxDrawerModule
    ,DxSelectBoxModule
    } from "devextreme-angular";


@NgModule({
    imports: [
        DxTextBoxModule,
        DxValidatorModule,
        DxDrawerModule,
        DxButtonModule,
        DxToolbarModule,
        DxDataGridModule,
        DxBulletModule,
        DxListModule,
        DxValidationSummaryModule,
        DxValidationGroupModule,
        DxPopupModule,
        DxScrollViewModule,
        DxLookupModule,
        DxFormModule,
        DxDateBoxModule,
        DxCheckBoxModule,
        DxCalendarModule,
        DxSelectBoxModule

 ],
  exports: [
    DxTextBoxModule,
        DxValidatorModule,
        DxButtonModule,
        DxToolbarModule,
        DxDataGridModule,
        DxBulletModule,
        DxListModule,
        DxValidationSummaryModule,
        DxValidationGroupModule,
        DxPopupModule,
        DxScrollViewModule,
        DxDrawerModule,
        DxLookupModule,
        DxDateBoxModule,
        DxFormModule,
        DxCheckBoxModule,
        DxCalendarModule,
        DxSelectBoxModule
        

  ]
   })

export class DevExtremeModules { }