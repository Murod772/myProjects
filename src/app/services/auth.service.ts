import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  comp = '';
  user: Observable<any>;

  // comp = this.user.pipe(
  //   take(1),
  //   map(user => {
  //     return user['company'];
  //     }
  //   )
  // );
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private navCtrl: NavController, public menu: MenuController) {
    
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
   }



  signOut() {
    this.afAuth.signOut().then(() => {
      this.navCtrl.navigateRoot('/');
    });
  }

  signUp(credentials) {
    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      console.log('after register: ', data);
      return this.db.doc(`users/${data.user.uid}`).set({
        name: credentials.name,
        company: credentials.company,
        mc: credentials.mc,
        phone: credentials.phone,
        email: credentials.email,
        role: credentials.role,
        created: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
          return this.db.doc(`companies/${credentials.company}/users/${data.user.uid}`).set({
            name: credentials.name,
            company: credentials.company,
            mc: credentials.mc,
            phone: credentials.phone,
            email: credentials.email,
            role: credentials.role,
            created: firebase.firestore.FieldValue.serverTimestamp()
          }).then(() => {
           this.comp = credentials.company;
          }).then(() => {
            if(credentials.role == 'DRIVER'){
              return this.db.doc(`companies/${this.comp}/users/${data.user.uid}`).update({
                status: 'Ready'
              })
            }
          })
      });
    });
  }

  signIn(credentials): Observable<any> {
    
    return from(this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        console.log('real user: ', user);
        if (user) {
          return this.db.doc(`users/${user.user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

}

