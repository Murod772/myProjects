import { Subscription } from 'rxjs';
import { LoadsService } from './../../../../services/loads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-current-load',
  templateUrl: './current-load.page.html',
  styleUrls: ['./current-load.page.scss'],
})
export class CurrentLoadPage implements OnInit, OnDestroy {
  match = 'Assigned';
  loads = [];
  isLoading = false;
  private loadsSub: Subscription;
  constructor(private loadsService: LoadsService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('Hello');
    if (!this.loadsService.getLoad()) {
      setTimeout(() => {
        this.isLoading = true;
        this.loadsSub = this.loadsService.getLoad().subscribe((res) => {
          const newLoad = [];
          res.map(async (load: any) => {
            load.status == this.match
              ? newLoad.push(load)
              : await this.loadsService.deleteLoad(load.id, load);
          });
          this.loads = newLoad;
          this.isLoading = false;
        });
      }, 500);
    } else {
      this.isLoading = true;
      this.loadsSub = this.loadsService.getLoad().subscribe((res) => {
        const newLoad = [];
        res.map(async (load: any) => {
          load.status == this.match
            ? newLoad.push(
                load
              ) /**if it is ready type load then add it to newload array */
            : await this.loadsService.deleteLoad(
                load.id,
                load
              ); /**Here i checked the res and when even i find a load that is Delivered i delete it */
        });
        this.loads = newLoad; //now it will only have loads that are Ready
        this.isLoading = false;
      });
    }
  }

  ngOnDestroy() {
    if (this.loadsSub) {
      this.loadsSub.unsubscribe();
    }
  }
}
