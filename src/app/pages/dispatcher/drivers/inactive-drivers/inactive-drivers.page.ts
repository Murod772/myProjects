import { DriversService } from 'src/app/services/drivers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-drivers',
  templateUrl: './inactive-drivers.page.html',
  styleUrls: ['./inactive-drivers.page.scss'],
})
export class InactiveDriversPage implements OnInit {

  isLoading = false;
  
  constructor(private driverService: DriversService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.driverService.getDriver()){
      setTimeout(()=>{
        this.isLoading = true;
      })
    }
  }

}
