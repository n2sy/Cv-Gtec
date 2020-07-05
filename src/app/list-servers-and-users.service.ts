import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServersAndUsersService {
  ListeServers = [
  {
    id : 1,
    name : "Serveur de Test",
    status : "Offline"
  },
  {
    id : 2,
    name : "Serveur de Sameh",
    status : "Online"
  },
  {
    id : 3,
    name : "Serveur de Mariem",
    status : "Online"
  },
];

getListServers() {
  return this.ListeServers;
}

getServerById(id) {
  return this.ListeServers.find((s) => s.id == id);
}
  constructor() { }
}
