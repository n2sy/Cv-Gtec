import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  name : string = "Mariem"
  @Input() bgColor : string = "yellow"
  hd = false

  @Output() sendRequest = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendMsg() {
    this.sendRequest.emit('Message envoyé par le fils !');
  }

  Traitement() {
    alert('Vous avez cliqué !!!');
  }

}
