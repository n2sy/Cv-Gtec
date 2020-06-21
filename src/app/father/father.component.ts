import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  TraitementduParent(msg) {
    alert('Message Bien reçu par le parent : ' + msg)
  }

}
