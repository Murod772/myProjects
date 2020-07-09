
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { take, map, tap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import 'firebase/auth';
import * as firebase from 'firebase/app';

interface LoadData {
  distance: number;
  driverName: string;
  from: string;
  loadNumber: number;
  price: number;
  status: string;
  to: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoadsService {

  comp = '';

  getUsers() {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        //  user['company'];
        this.comp = user['company'];
        return user['company'];
      })
    )
  }

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private auth: AuthService) { 
    this.getUsers().subscribe(user => {
      this.comp = user;
   });
  }

  async addLoad(load) {
    console.log(this.comp);
    load.creator = auth().currentUser.uid;

    return this.db
      .collection(`companies/${this.comp}/currentLoads`)
      .add(load)
      .then((data) => {
        return this.db
          .doc(`companies/${this.comp}/currentLoads/${data.id}`)
          .update({
            date: new Date().getTime(),
          });
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

    /** Added this function to add data in pastload on firebase */
  addPastLoad(load) {
    console.log(this.comp);
    load.creator = auth().currentUser.uid;

    return this.db
      .collection(`companies/${this.comp}/pastLoad`)
      .add(load)
      .then((data) => {
        return this.db
          .doc(`companies/${this.comp}/pastLoad/${data.id}`)
          .update({
            date: new Date().getTime(),
          });
      })
      .catch((ex) => {
        console.log(ex);
      });
  }

  getLoad(){

    this.getUsers().subscribe((user) => {
      this.comp = user;
    });

    if (this.comp) {
      // console.log('hello',this.comp)
      return this.db.collection(`companies/${this.comp}/currentLoads`).valueChanges({idField: 'id'})
      // .pipe(
       // take(1)
     // )
    }
  }

  getOnePastLoad(id){
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });

    if (this.comp) {
      return this.db
        .doc(`companies/${this.comp}/pastLoad/${id}`)
        .valueChanges();
    }
  }

  getPastLoad() {
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });

    if (this.comp) {
      console.log('getting past loads in past load function');
      return this.db
        .collection(`companies/${this.comp}/pastLoad`)
        .valueChanges({ idField: 'id' });
    }
  }

  getOneCurrentLoad(id) {
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });

    if (this.comp) {
      return this.db
        .doc(`companies/${this.comp}/currentLoads/${id}`)
        .valueChanges();
    }
  }

  deleteLoad(id, load = null) {
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });

    if (this.comp) {
      if (load) {
        this.addPastLoad(load); /**If load is defined then add this load to firebase then proceed on deleting it */
      }
      else{
        console.log('load is undefined')
      }
      return this.db.doc(`companies/${this.comp}/currentLoads/${id}`).delete();
    }
  }

  removeLoad(id){
    return this.db.doc(`companies/${this.comp}/currentLoads/${id}`).delete();
  }

  updateLoad(load, id){
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });

    if (this.comp) {
      // console.log('hello',this.comp)
      return this.db.doc(`companies/${this.comp}/currentLoads/${id}`).update(
        load
      )
    }
  }
}
