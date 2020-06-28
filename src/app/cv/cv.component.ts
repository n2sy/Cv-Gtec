import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';
import { ListePersonnesService } from '../liste-personnes.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPers : Personne;
  listePersonne : Personne[] = [];

  constructor(private persService : ListePersonnesService) { }

  ngOnInit() {
    this.listePersonne = this.persService.getListePersonnes();
  }

  sendToDetail(p) {
    this.selectedPers = p;
  }

  addPerson(){
    this.persService.addPersonne(
      new Personne(4, "foulen", "ben foulen", 55, 'Rien')
    );
    console.log(this.persService.getListePersonnes());
    
  }

}
