import { LoadsService } from './../../../../../services/loads.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-load',
  templateUrl: './edit-load.page.html',
  styleUrls: ['./edit-load.page.scss'],
})
export class EditLoadPage implements OnInit {
  load = null;
  loadId = null;
  
  constructor(private loadsService: LoadsService, private activatedRoute: ActivatedRoute, private navCtrl: NavController,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.loadId = paramMap.get('loadId');
    })
        if (!this.loadsService.getOnePastLoad(this.loadId)) {
      setTimeout(() => {
        this.loadsService
        .getOnePastLoad(this.loadId)
        .subscribe((res) => {
          if (res) {
            this.load = res;
          }
        })
      }, 500);
    } else {
      this.loadsService
      .getOnePastLoad(this.loadId)
      .subscribe((res) => {
        if (res) {
          this.load = res;
        }
      });
    }
  }
}
