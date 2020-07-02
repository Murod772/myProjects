import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name = '';
  toastCtrl: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.name = this.auth.name;
    console.log(this.name);
  }

  updateUser() {
    console.log(this.name);
    return this.auth.updateUser(this.name);
    
  }

}
