import { Subscription } from 'rxjs';
import { LoadsService } from './../../../../../services/loads.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-current-details',
  templateUrl: './current-details.page.html',
  styleUrls: ['./current-details.page.scss'],
})
export class CurrentDetailsPage implements OnInit {
  
  loads = {
    distance: '',
    driverName: '',
    from: '',
    loadNumber: '',
    price: '',
    status: '',
    to: ''
  };
  isLoading = false;
  loadId = '';
  private loadsSub: Subscription;

  constructor(private loadsService: LoadsService, private activatedRoute: ActivatedRoute, private navCtrl: NavController) {
    
    
  }
  
  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.loadId = paramMap.get('loadId');
    })

        
    if (!this.loadsService.getLoadById(this.loadId) ) {
      setTimeout(() => {
       this.loadsService
          .getLoadById(this.loadId)
          .subscribe((res) => {
            if (res) {
              this.loads = {
                distance: res['distance'],
                driverName: res['driverName'],
                from: res['from'],
                loadNumber: res['loadNumber'],
                price: res['price'],
                status: res['status'],
                to: res['to'],
              };
            }
          });
      }, 500);
    } else {
      this.loadsService
        .getLoadById(this.loadId)
        .subscribe((res) => {
          if (res) {
            this.loads = {
              distance: res['distance'],
              driverName: res['driverName'],
              from: res['from'],
              loadNumber: res['loadNumber'],
              price: res['price'],
              status: res['status'],
              to: res['to'],
            };
          }
        });
    }
  }
  ionViewWillEnter() {

  }

  update() {
    if (this.loadId) {
      this.loadsService.updateLoad(this.loads, this.loadId).then(() => {
        this.navCtrl.navigateBack('/loads/current');
        return;
      });
    }
  }

}
