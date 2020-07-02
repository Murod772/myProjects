import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.page.html',
  styleUrls: ['./dispatcher.page.scss'],
})
export class DispatcherPage implements OnInit {

  
  constructor(private auth: AuthService, public comp: AppComponent) { }

  ngOnInit() {
  }

  signOut(){
    this.auth.signOut();
  }

}
