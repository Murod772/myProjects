import { Subscription } from 'rxjs';
import { LoadsService } from './../../../../../services/loads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-current-details',
  templateUrl: './current-details.page.html',
  styleUrls: ['./current-details.page.scss'],
})
export class CurrentDetailsPage implements OnInit, OnDestroy {
  
  load = null;
  isLoading = false;
  loadId = null;
  private loadSub: Subscription;

  constructor(private loadsService: LoadsService, private router: Router, private activatedRoute: ActivatedRoute, private navCtrl: NavController) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.loadId = paramMap.get('loadId');
    })

    if (!this.loadsService.getOneCurrentLoad(this.loadId) ) {
      setTimeout(() => {
        this.loadSub = this.loadsService
          .getOneCurrentLoad(this.loadId)
          .subscribe(res => {
            if (res) {
              this.load = res;
            }
          })
      }, 500);
    } else {
      this.loadSub = this.loadsService
      .getOneCurrentLoad(this.loadId)
      .subscribe(res => {
        if (res) {
          this.load = res;
        }
      });
    }
  }
  // update() {
  //   if (this.loadId) {
  //     this.loadsService.updateLoad(this.load, this.loadId).then(() => {
  //       this.navCtrl.navigateBack('/loads/current');
  //       return;
  //     });
  //   }
  // }

  ngOnDestroy(){
    this.loadSub.unsubscribe();
  }
}
