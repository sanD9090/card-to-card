import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  second:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  selectone(button:number){
    if(button==1){
      this.second=["Mobile","Latop","Car"];
    }
    if(button==2){
      this.second=["Car","Bike","Truck"];
    }
    if(button==3){
      this.second=["Snacks","Vegetables","Fruits",];
    }
    if(button==4){
      this.second=["CPU","Mouse","Pen","Engine","Clock","Gear"];
    }
}
}
