import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {
user$: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = auth.authState;
   }
  login() {
   const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl', returnUrl);
   this.auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logout() {
    this.auth.auth.signOut();
  }
  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user) return this.userService.get(user$.uid);
      return Observable.of(null);
    });

  }
}
