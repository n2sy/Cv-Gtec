import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
  bgColor : string = 'green';
  cl : string = 'black';
  fontsize : string = '20px';

  s : boolean = true;

  cls1 : boolean = true;
  cls2 : boolean = false;
  cls3 : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switch() {
    if(this.s) {
      this.s = false;
      this.bgColor = "pink";
      this.cl = "yellow";
      this.fontsize = "80px";
    }
    else {
      this.s = true;
      this.bgColor = "green";
      this.cl = "black";
      this.fontsize = "20px";
    }

  }

  switchClass() {
    if(this.cls1) {
      this.cls1 = false;
      this.cls2 = true;
    }
    else if(this.cls2) {
      this.cls2 = false;
      this.cls3 = true;
    }
    else {
      this.cls3 = false;
      this.cls1 = true;
    }
  }

}
