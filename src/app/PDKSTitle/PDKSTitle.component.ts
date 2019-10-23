import { Component, OnInit } from '@angular/core';
import {titleModels} from '../model/titleModel'
import {TitleServicesService} from '../services/titleServices/titleService.service'
import Form from "devextreme/ui/form";
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-PDKSTitle',
  templateUrl: './PDKSTitle.component.html',
  styleUrls: ['./PDKSTitle.component.css']
})
export class PDKSTitleComponent implements OnInit {
  titleFormData : titleModels;
    titleList : titleModels[];

  constructor(public titleService : TitleServicesService) { 
    this.titleFormData = titleService.getTitleFormInstance()
  }

  ngOnInit() {
    this.getList()
  }

  btnClear() { 
    let element = document.getElementById("formTitle");
    let instance = Form.getInstance(element) as Form; 
    instance.resetValues(); //Formu Temizle
  }
  getList(){
      this.titleService.getTitle().subscribe(result => {
        this.titleList = result;
        })
    }

  saveTitle(){   
    debugger
    let element = document.getElementById("formTitle");
    let instance = Form.getInstance(element) as Form; 
    let result = instance.validate()
    if (result.isValid) 
    {
      this.titleService.saveTitle(this.titleFormData).subscribe(result => {
        debugger
        if (result["message"]=="Ok") {
          notify({
            message: "Kaydetme İşlemi Başarılı.",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 1500); 
        this.getList();
        this.btnClear();
        }
        else{
          notify({
            message: "Kaydetme İşlemi Başarısız.",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "error", 1500); 
        }
      })
    }
  
    
  
    }

    Update(e){
      this.titleService.saveTitle(e.data).subscribe(result => {
              this.getList()
              })
          }

          Delete(e){
   
            this.titleService.deleteTitle(e.data.kimlik).subscribe(result=>{
              
            })
          }          

}
