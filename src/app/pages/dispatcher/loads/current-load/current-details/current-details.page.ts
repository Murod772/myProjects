import { Subscription } from 'rxjs';
import { LoadsService } from './../../../../../services/loads.service';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
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
  loadId = null;
  private loadsSub: Subscription;

  constructor(private loadsService: LoadsService, private activatedRoute: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.loadId = this.activatedRoute.snapshot.paramMap.get('id');

    if (!this.loadsService.getLoadById(this.loadId))
    {
      setTimeout(() => {
        this.isLoading = true;
        this.loadsSub = this.loadsService.getLoadById(this.loadId).subscribe(
          res => {
            this.loads = {
              distance: res['distance'],
              driverName: res['driverName'],
              from: res['from'],
              loadNumber: res['loadNumber'],
              price: res['price'],
              status: res['status'],
              to: res['to']
            };
            console.log(res['distance'])
          }
        )
      }, 500);
    }
    else{
      this.isLoading = true;
      this.loadsSub = this.loadsService.getLoadById(this.loadId).subscribe(
        (res) => {
          this.loads = {
            distance: res['distance'],
            driverName: res['driverName'],
            from: res['from'],
            loadNumber: res['loadNumber'],
            price: res['price'],
            status: res['status'],
            to: res['to']
          };
          console.log(res['distance'])
        }
      )
    }
  }

  update(){
    if(this.loadId){
      this.loadsService.updateLoad(this.loads, this.loadId).then(()=> {
        this.navCtrl.navigateBack('/loads/current');
        return;
      })
    }
  }

  ngOnDestroy() {
    if (this.loadsSub) {
      this.loadsSub.unsubscribe();
    }
  }
}
