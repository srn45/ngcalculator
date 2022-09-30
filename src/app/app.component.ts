import { Component, ViewChild } from '@angular/core';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DataComponent) viewdata !: DataComponent
  title = 'ngcalculator';
  inputname:"" | undefined;
  inputmark:"" | undefined;
  inputposition: "" | undefined;
  inputobj={"name":"","mark":"","position":""};
  response:any;
  responsed:any;
  transferdata(name:any,mark:any,position:any){
    this.inputname=name;
    this.inputmark=mark;
    this.inputposition=position;
    this.inputobj={"name":name,"mark":mark,"position":position};
    this.response=this.viewdata.updatelist(this.inputobj);
    this.responsed=this.response + " is added";
  }

  UpdateTitle(title:any){
    this.title=title;
  }
}
