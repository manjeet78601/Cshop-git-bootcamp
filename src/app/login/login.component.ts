import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {

   }

  login() {
    this.auth.login();
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

}
