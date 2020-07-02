import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, public menu: MenuController) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.role;

    return this.auth.user.pipe(
      take(1),
      map(user => {
        console.log('user in here: ', user);
        console.log('user in here: ', user, 'user id:', user['mc']);
        if (!user) {
          return false;
        } else {
          const role = user['role'];
          if (expectedRole == role) {
            return true;
          } else {
            this.router.navigateByUrl('/');
            return false;
          }
        }
      })
    );
  }
}
