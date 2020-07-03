import { DriversService } from 'src/app/services/drivers.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inactive-drivers',
  templateUrl: './inactive-drivers.page.html',
  styleUrls: ['./inactive-drivers.page.scss'],
})
export class InactiveDriversPage implements OnInit, OnDestroy {
  
  drivers = [];
  isLoading = false;
  match = 'Ready';
  private driversSub: Subscription;
  
  constructor(private driverService: DriversService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(this.driverService.getDriver()){
      setTimeout(() => {
        this.isLoading = true;
        this.driversSub = this.driverService.getDriver().subscribe((res) => {
          this.drivers = res;
          this.isLoading = false
        });
      }, 500);
    }
    else{
      setTimeout(() => {
        this.isLoading = true;
        this.driversSub = this.driverService.getDriver().subscribe((res) => {
          this.drivers = res;
          this.isLoading = false
        });
      }, 500);
    }
  }

  ngOnDestroy() {
    if (this.driversSub) {
      this.driversSub.unsubscribe();
    }
  }

}
