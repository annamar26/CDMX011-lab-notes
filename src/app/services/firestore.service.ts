import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Note } from '../classes/Note';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}
  getAllNotes (user: string){
    return this.firestore.collection('users').doc(user).snapshotChanges()
    
  }
  addNote(user: string, changes: any){
    return this.firestore.collection('users').doc(user).set(changes)
  }
  updateNote(user: string, changes: any){
    return this.firestore.collection('users').doc(user).update(changes)
  }
  addUser(user: any, id: string){
    return this.firestore.collection('users').doc(id).set(user)
  }

  deleteNote(documentId: string) {
    return this.firestore.collection('notes').doc(documentId).delete();
  }
   
 }

