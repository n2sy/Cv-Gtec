import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mySection = "ds";
  myComment = "Ceci est un commentaire...."
  constructor() { }

  ngOnInit() {
  }

  showForm(f) {
    console.log(f);
    
  }

  resetForm(f) {
    f.reset();
  }

}
