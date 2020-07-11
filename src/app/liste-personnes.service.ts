



import { Injectable } from '@angular/core';
import { Personne } from './Model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListePersonnesService {
  listePersonne : Personne[] = [
    new Personne(1, "jelassi", "nidhal", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "simpson", "bart", 12, "Etudiant", "bart.jpg"),
    new Personne(3, "simpson", "homer", 80, "Ingénieur")
  ]
  constructor() { }

  getListePersonnes() {
    return this.listePersonne;
  }

  getPersonneById(id) {
    return this.listePersonne.find((p) => p.id == id);
  }

  addPersonne(p) {
    p['id'] = this.listePersonne[this.listePersonne.length - 1]['id'] + 1;
    this.listePersonne.push(p);
  }

  deletePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne.splice(i, 1);
  }

  updatePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }
}
