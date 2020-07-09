import { LoadsService } from './../../../../services/loads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-load',
  templateUrl: './past-load.page.html',
  styleUrls: ['./past-load.page.scss'],
})
export class PastLoadPage implements OnInit, OnDestroy {

  match = 'Assigned';
  loads = [];
  isLoading = false;
  private loadsSub: Subscription;
  constructor(private loadsService: LoadsService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    if (!this.loadsService.getPastLoad()) {
      setTimeout(() => {
        this.isLoading = true;
        this.loadsSub = this.loadsService.getPastLoad().subscribe((res) => {
          /**Getting Past Load and saving it */
          this.loads = res;
          this.isLoading = false;
        });
      }, 500);
    } else {
      this.isLoading = true;
      this.loadsSub = this.loadsService.getPastLoad().subscribe((res) => {
        this.loads = res; /**Getting Past Load and saving it */
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
