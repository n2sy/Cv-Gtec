import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  bgColor : String;
  color : String;
  size : String;
  font : String;
  listeFonts = ['', 'Garamond', 'Impact', 'Verdana'];
  constructor() { }

  ngOnInit() {
  }

  modifSize(s) {
    this.size = s + 'px';
  }

}
