import { LoadsService } from './../../../../../services/loads.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
        if (!this.loadsService.getLoadById(this.loadId)) {
      setTimeout(() => {
        this.loadsService
        .getLoadById(this.loadId)
        .subscribe((res) => {
          if (res) {
            this.load = res;
          }
        })
      }, 500);
    } else {
      this.loadsService
      .getLoadById(this.loadId)
      .subscribe((res) => {
        if (res) {
          this.load = res;
        }
      });
    }
  }

  delete(id){
    this.loadsService.removeLoad(id);
    this.navCtrl.navigateBack('/dispatcher/loads/current')
    
  }

}
