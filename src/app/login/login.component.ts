import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mySection = "ds";
  myComment = "Ceci est un commentaire...."
  error = false;
  constructor(private loginServ : LoginService,
    private router : Router) { }

  ngOnInit() {
  }

  login(identifiants) {
    this.loginServ.seConnecter(identifiants).subscribe(
      (reponse) => {
        let myToken = reponse['id'];
        localStorage.setItem('token', myToken);
        this.router.navigate(['cv']);
      },
      (error) => {
        this.error = true;
      }
    )
  }

  showForm(f) {
    console.log(f);
    
  }

  resetForm(f) {
    f.reset();
  }

  generatePwd(f) {
    f.setValue({
      "options": "",
      "login": "",
      "password": "generatedPqssword123",
      "section": "d",
      "comment": ""
    })
  }

    generatePwdII(f) {
      f.form.patchValue({
        "password" : "nidhalpassword"
      })
    }

  

}
