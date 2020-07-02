import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
import { MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AutomaticLoginGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, public menu: MenuController, private db: AngularFirestore) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
   

    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('User in here: ', user);
        if (!user) {
          return true;
        } else {
          const role = user['role'];
          if (role == "DISP") {
            this.router.navigateByUrl('/dispatcher/loads/current');
          } else if (role == "DRIVER") {
            this.router.navigateByUrl('/driver');

          }
          return false;
        }
      })
    );
  }
}
