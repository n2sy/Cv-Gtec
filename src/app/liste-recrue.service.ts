import { Injectable } from '@angular/core';
import { Personne } from './Model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListeRecrueService {
  listeRecrues : Personne[] = [];

  constructor() { }

  getListeRecrues() {
    return this.listeRecrues;
  }

  addRecrue(p : Personne) {
    if(this.listeRecrues.indexOf(p) < 0) 
      this.listeRecrues.push(p);
    else
      alert('Cette personne a déjà été recruté !')
  }
}
