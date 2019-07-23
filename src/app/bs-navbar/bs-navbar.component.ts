import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  // user :firebase.User;

  constructor(public auth: AuthService) {
    // auth.authState.subscribe(x => console.log(x));
  }

  logout() {


  }

}
