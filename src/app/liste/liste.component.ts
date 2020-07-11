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
  @Output() pSended = new EventEmitter<Personne>();

  constructor(private pServ : ListePersonnesService) { }
  
  
  ngOnInit() {
    this.pServ.getListePersonnesAPI().subscribe(
      (reponse : Personne[]) => {
        this.ListPersonne = reponse;
      },
      (error) => {
        alert('Erreur de récupération des personnes !')
      }
    )
  }

  sendPers(p) {
    this.pSended.emit(p)
  }

  showListe() {
    console.log(this.pServ.getListePersonnes());
    
  }

}
