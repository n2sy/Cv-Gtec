import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ListePersonnesService } from '../liste-personnes.service';


@Component({
  selector: 'app-rh-manager',
  templateUrl: './rh-manager.component.html',
  styleUrls: ['./rh-manager.component.css']
})
export class RhManagerComponent implements OnInit {
  listCandidats : Personne[];
  listRecrues : Personne[];
  listRefuses : Personne[];

  showValue = false;
  displayValue = "none"
  constructor(private persServ : ListePersonnesService) { }

  ngOnInit() {
    this.listCandidats = this.persServ.sortListByStatus("candidat");
    this.listRecrues = this.persServ.sortListByStatus("recrue");
    this.listRefuses = this.persServ.sortListByStatus("refuse");
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    let newStatus = event.container.element.nativeElement.classList[0];
    let p = event.item.data;
    p['status'] = newStatus;
    this.persServ.updatePersonne(p);
  }

  showModal() {
    this.showValue = true;
    this.displayValue = "block";
  }

  hideModal() {
    this.showValue = false;
    this.displayValue = "none";
  }

  saveChanges(p, n) {
    this.persServ.addPersonne(
      new Personne(10, n, p, 20, "rien", "", "candidat")
    );

    this.hideModal();
    this.ngOnInit();
    console.log(this.persServ.listePersonne);
    
  }

}
