import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { DriversService } from 'src/app/services/drivers.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.page.html',
  styleUrls: ['./add-driver.page.scss'],
})
export class AddDriverPage implements OnInit {
  users = [];
  participant = '';
  form: FormGroup;

  constructor(
    private driverService: DriversService,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  addDriver() {
    const obs = this.driverService.findUser(this.participant.toLowerCase());

    forkJoin(obs).subscribe(
      (res) => {
        if (!res) {
          return console.log('Got undefined');
        }
        for (let data of res) {
          if (data.length > 0) {
            let _data: any = data[0];
            if (_data.status === 'inactive') this.users.push(data[0]);
            else
              console.log('driver with this name is is state : ', _data.status);
          }
        }

        this.participant = '';
      },
      (error) => {
        console.log('Here you got an error: ', error);
      }
    );
  }
}
