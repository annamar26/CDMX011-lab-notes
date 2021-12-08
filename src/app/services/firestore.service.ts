import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Note } from '../classes/Note';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}
  getAllNotes (){
    return this.firestore.collection('notes').stateChanges()
  }
  addNote(nota: Note){
    return this.firestore.collection('notes').add(nota)
  }

  deleteNote(documentId: string) {
    return this.firestore.collection('notes').doc(documentId).delete();
  }
   
  updateNote(documentId: string, data: any) {
    return this.firestore.collection('notes').doc(documentId).set(data);
  }
}

