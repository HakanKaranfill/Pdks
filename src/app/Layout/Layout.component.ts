import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxListModule, DxToolbarModule, DxSelectBoxModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';


@Component({
    selector: 'app-Layout',
    templateUrl: './Layout.component.html',
    styleUrls: ['./Layout.component.css']
})
export class LayoutComponent {
    constructor() { 
    }
}