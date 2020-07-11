import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/personne';
import { ListePersonnesService } from '../liste-personnes.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  
  ListPersonne : Personne[] = [];


  constructor(private pServ : ListePersonnesService) { }
  @Output() pSended = new EventEmitter<Personne>();
  ngOnInit() {
    this.ListPersonne = this.pServ.getListePersonnes();
  }

  sendPers(p) {
    this.pSended.emit(p)
  }

  showListe() {
    console.log(this.pServ.getListePersonnes());
    
  }

}
