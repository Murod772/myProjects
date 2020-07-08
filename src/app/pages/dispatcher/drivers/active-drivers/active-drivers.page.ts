import { DriversService } from 'src/app/services/drivers.service';
import { Component, OnInit } from '@angular/core';
const SuperArray = import('super-array');
@Component({
  selector: 'app-active-drivers',
  templateUrl: './active-drivers.page.html',
  styleUrls: ['./active-drivers.page.scss'],
})
export class ActiveDriversPage implements OnInit {
  loc = '';
  driver = '';
  id = '';

  findDriver() {}

  getDriver() {
    this.driversService.getOneDriver().subscribe((drivers: any) => {
      // const myArray = new SuperArray(drivers.data, function(item) { return item.name });
      for (var i = 0; i < drivers.data.length; i++) {
        if (drivers.data[i].staticAssignedDriver) {
          if (
            drivers.data[i].staticAssignedDriver.name == 'Mohamed Ahmed Ismael'
          ) {
            console.log(drivers.data[i]);
            this.id = drivers.data[i].id;
          } else {
            console.log('nothing');
          }
        }
      }
      //  console.log(myArray.get('6656').staticAssignedDriver.name)
    });
  }

  constructor(private driversService: DriversService) {
    this.driversService.getOneDriver().subscribe((drivers: any) => {
      // const myArray = new SuperArray(drivers.data, function(item) { return item.name });
      for (var i = 0; i < drivers.data.length; i++) {
        if (drivers.data[i].staticAssignedDriver) {
          if (
            drivers.data[i].staticAssignedDriver.name == 'Mohamed Ahmed Ismael'
          ) {
            console.log(drivers.data[i]);
            this.id = drivers.data[i].id;
          } else {
            console.log('nothing');
          }
        }
      }
      //  console.log(myArray.get('6656').staticAssignedDriver.name)
    });
  }

  getLocation() {
    console.log(this.id);
    this.driversService.getLocations(this.id).subscribe((locations: any) => {
      this.loc = locations.data[0].location.reverseGeo.formattedLocation;
      console.log(this.loc);
    });
  }
  ngOnInit() {}
}
