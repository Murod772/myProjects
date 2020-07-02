import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map, tap, delay, switchMap, combineLatest } from 'rxjs/operators';
// import * as firebase from 'firebase/app';
// import { forkJoin, from } from 'rxjs';
// import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class DriversService {

  user: User;
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

  constructor(private db: AngularFirestore, private auth: AuthService, private afAuth: AngularFireAuth) {
    this.getUsers().subscribe((user) => {
      this.comp = user;
   });
  }

  findUser(value) {
    console.log(this.comp)
    let email = this.db.collection(`companies/${this.comp}/users`, ref => ref.where('email', '==', value)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    let name = this.db.collection(`companies/${this.comp}/users`, ref => ref.where('name', '==', value)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    return [email, name];
  }

  addDriver(){
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });
    if(this.comp){
      return this.db.collection(`companies/${this.comp}/drivers/inactive/ready`, ref => ref.where('status', '==', 'Ready')).add
    }
  }

  getDriver(){
    this.getUsers().subscribe((user) => {
      this.comp = user;
    });
    if(this.comp){
      return this.db.collection(`companies/${this.comp}/users`, ref => ref.where('status', '==', 'Ready')).valueChanges({idField: 'id'}).pipe(
        take(1)
      )
    }
  }
}
