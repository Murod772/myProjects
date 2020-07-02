import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signOut(){
    this.auth.signOut();
  }

}
