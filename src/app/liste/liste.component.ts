import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() ListPersonne : Personne[]
  constructor() { }
  @Output() pSended = new EventEmitter<Personne>();
  ngOnInit() {
  }

  sendPers(p) {
    this.pSended.emit(p)
  }

}
