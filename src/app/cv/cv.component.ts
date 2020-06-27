import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPers : Personne;
  listePersonne : Personne[] = [
    new Personne(1, "jelassi", "nidhal", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "simpson", "bart", 12, "Etudiant", "bart.jpg"),
    new Personne(3, "simpson", "homer", 80, "Ingénieur")
  ]
  constructor() { }

  ngOnInit() {
  }

  sendToDetail(p) {
    this.selectedPers = p;
  }

}
