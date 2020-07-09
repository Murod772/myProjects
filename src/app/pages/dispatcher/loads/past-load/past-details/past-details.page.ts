import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoadsService } from './../../../../../services/loads.service';

@Component({
  selector: 'app-past-details',
  templateUrl: './past-details.page.html',
  styleUrls: ['./past-details.page.scss'],
})
export class PastDetailsPage implements OnInit, OnDestroy {

  load = null;
  isLoading = false;
  loadId = null;
  private loadSub: Subscription;
  constructor(private loadsService: LoadsService, private router: Router, private activatedRoute: ActivatedRoute, private navCtrl: NavController) {
    
    
  }
  
  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
      this.loadId = paramMap.get('loadId');
    })

    if (!this.loadsService.getOnePastLoad(this.loadId) ) {
      setTimeout(() => {
        this.loadSub = this.loadsService
          .getOnePastLoad(this.loadId)
          .subscribe(res => {
            if (res) {
              console.log(res)
              this.load = res;
            }
          })
      }, 500);
    } else {
      this.loadSub = this.loadsService
      .getOnePastLoad(this.loadId)
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
