import { LoadsService } from './../../../../services/loads.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-assign-load',
  templateUrl: './assign-load.page.html',
  styleUrls: ['./assign-load.page.scss'],
})
export class AssignLoadPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadsService: LoadsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      driverName: ['', Validators.required].toString().toLowerCase(),
      loadNumber: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      status: ['Assigned', Validators.required],
      distance: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onCreateLoad() {
    if (!this.form.valid) {
      return;
    }
    console.log('On create load works!', this.form);
    this.loadsService.addLoad(this.form.value).then((res) => {
      this.form.reset();
      this.router.navigateByUrl('dispatcher/loads/current');
      return res;
    });
  }
}
