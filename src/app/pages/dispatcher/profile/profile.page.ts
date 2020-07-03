import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name = '';
  toastCtrl: any;

  getUser(){
    return this.auth.user.pipe(
      take(1), 
      map(user => {
      this.name = user['name'];
      return user['name'];
     }))

  }

  constructor(private auth: AuthService) {
    this.getUser().subscribe(user => {
      this.name = user;
    })

   }

  ngOnInit() {
  }

  updateUser() {
    console.log(this.name);
    return this.auth.updateUser(this.name);
    
  }

}
