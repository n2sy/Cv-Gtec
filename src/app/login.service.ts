import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  link = "http://localhost:3000/api/Users"
  
  constructor(private http : HttpClient) { }

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

isLogged() {
  let myToken = localStorage.getItem('token');
  if(myToken)
    return true;
  else
    return false;
}

seDeconnecter() {
  localStorage.removeItem('token');
}

}
