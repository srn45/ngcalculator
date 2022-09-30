import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './datas.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
   @Input() Namedata:any;
   @Input() Markdata:any;
   @Input() Positiondata:any;
   
   @Output() dataupdateevent= new EventEmitter<string>();
   lstarray =[{"name":"Raja","mark":120,"position":"1st"}]
  constructor() { }
   updatelist(obj:any){
    
    this.lstarray.push(obj);
    return obj.name;
   
   }
  ngOnInit(): void {

  }

}
