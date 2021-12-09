import { Component, OnInit } from '@angular/core';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { Note } from 'src/app/classes/Note';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  userUid = '';
  inputValue = ''
  input: any | undefined
  notes: Array<Note> = [];
  showFiller = false;
  userNote: Note = {
    id: '',
    autor: '',
    content: '',
    time: { date: '', hour: '' },
  };
  static getUser: any;
  constructor(private fs: FirestoreService, private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
    setTimeout(() => {
      this.getNotes(this.userUid);
    }, 500);

    // this.getNotes(this.userUid)
  }
  logOut() {
    this.authService.logOut().then(() => (window.location.href = '/'));
  }
  sendContent(content: string, id: string) {
   
    let array = [];
    this.userNote.content = content;
    this.getUser();
    this.userNote.autor = id;
    this.userNote.time.date = new Date().toLocaleDateString();
    this.userNote.time.hour = new Date().toLocaleTimeString();

    this.fs.addNote(this.userNote).then(() => {
      console.log('nota creada');

      this.userNote = {
        id: '',
        content: '',
        autor: '',
        time: { date: '', hour: '' },
      };
   this.notes = this.getNotes(this.userUid)})
  

    
   
  }
  getNotes(id: string) {
    this.notes = [];
    const allNotes: any = [];
    this.fs.getAllNotes().subscribe((res: any) => {
      res.forEach((noteData: any) => {
        allNotes.push({
          id: noteData.id,
          autor: noteData.data().autor,
          content: noteData.data().content,
          time: {
            date: noteData.data().date,
            hour: noteData.data().hour,
          },
        });
      });

      this.notes = allNotes.filter(
        (note: { autor: string }) => note.autor === id
      );
    });

    return (this.notes);
  }
   editContent(content: string, idPost: string, userUid: string) { 
    
     this.fs
      .updateNote(idPost, {
        id: idPost,
        content: content,
        autor: userUid,
        time: {
          date: new Date().toLocaleDateString(),
          hour: new Date().toLocaleTimeString(),
        },
      })
      .then(() => {
        console.log('editada');
         this.notes =  this.getNotes(userUid)
     
       
      });
  }
  delete(idPost: string) {
 
   
      this.fs
        .deleteNote(idPost)
        .then(
          () =>
          this.notes = this.getNotes(this.userUid)
        );

    //  .then(() => {
    //   console.log('eliminada');

    // });
  }
  getUser() {
    this.authService.getUserLogged().subscribe((res: any) => {
      this.userUid = res.uid;
      console.log(res.uid);
    });

    return this.userUid;
  }
 


}