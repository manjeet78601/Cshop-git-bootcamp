import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import{ Router } from '@angular/router';
import{UserService} from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private userService: UserService, private afAuth: AngularFireAuth, router:Router){
   afAuth.user.subscribe(user=>{
     if(user){
       userService.save(user);

       let returnUrl=localStorage.getItem('returnUrl');
       router.navigateByUrl(returnUrl);
     }
   });
 }
}

