import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth) {}

  async logIn(email: string, password: string) {
    return await this.afauth.signInWithEmailAndPassword(email, password);
  }
  async signUp(email: string, password: string) {
    return await this.afauth.createUserWithEmailAndPassword(email, password);
  }
  async logInWithGoogle(email: string, password: string) {
    return await this.afauth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
