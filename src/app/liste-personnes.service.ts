



import { Injectable } from '@angular/core';
import { Personne } from './Model/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListePersonnesService {
  link = "http://localhost:3000/api/personnes";
   listePersonne : Personne[] = [
  //   new Personne(1, "jelassi", "nidhal", 35, "Enseignant", "nidhal.jpg"),
  //   new Personne(2, "simpson", "bart", 12, "Etudiant", "bart.jpg"),
  //   new Personne(3, "simpson", "homer", 80, "Ingénieur")
   ]
  constructor(private http : HttpClient) { }

  getListePersonnes() {
    return this.listePersonne;
  }

  getListePersonnesAPI() : Observable<Personne[]>{
    return this.http.get<Personne[]>(this.link)
  }

  getPersonneById(id) {
    return this.listePersonne.find((p) => p.id == id);
  }

  getPersonneByIdAPI(id) : Observable<Personne> {
    //return this.http.get<Personne>(this.link+'/'+id);
    return this.http.get<Personne>(`${this.link}/${id}`);

  }    
 

  addPersonne(p) {
    p['id'] = this.listePersonne[this.listePersonne.length - 1]['id'] + 1;
    this.listePersonne.push(p);
  }

  addPersonneAPI(p) : Observable<any> {
    return this.http.post(this.link, p);
  }


  deletePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne.splice(i, 1);
  }

  deletePersonneAPI(id) : Observable<any> {
    return this.http.delete(`${this.link}/${id}`);
  }

  updatePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }

  updatePersonneAPI(p) : Observable<any> {
    return this.http.put(this.link, p);
  }
}
