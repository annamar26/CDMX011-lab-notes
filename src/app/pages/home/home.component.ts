import { Component, OnInit } from '@angular/core';
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
  inputValue = '';
  input: any | undefined;
  notes: Array<Note> = [];
  showFiller = false;
   userNote: Note = {
    id: '',
    content: '',
    time: { date: '', hour: '' },
    color: ''
  };
  colors=['#FF99A2', '#FFB7B2', '#FFDAC1', '#D2F0A2', '#B5EAD7', '#C7CEEA'] 
  inputColor= this.colors[Math.floor(Math.random() * this.colors.length)]
  static getUser: any;
  constructor(private fs: FirestoreService, private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
    setTimeout(() => {
      this.getNotes(this.userUid);
    }, 700);

  }
  logOut() {
    this.authService.logOut().then(() => (window.location.href = '/'));
  }
  sendContent(content: string) {
    if (content !== '' || undefined) {
      let array = this.notes;
      this.userNote.content = content;
      this.getUser();
      this.userNote.id = this.ID();
      this.userNote.time.date = new Date().toLocaleDateString();
      this.userNote.time.hour = new Date().toLocaleTimeString();
      this.userNote.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      array.push(this.userNote);
      console.log(array);
      let changes = { notes: array };
      this.fs.addNote(this.userUid, changes).then(() => {
        console.log('agregada');
        this.userNote = {
          id: '',
          content: '',
          time: { date: '', hour: '' },
          color: ""
        };
      });
    }
  }
  getNotes(id: string) {
   
    this.fs.getAllNotes(id).subscribe((res: any) => {
      const data = res.payload.data().notes;

      this.notes = data;
    });

    return this.notes;
  }
  async editContent(content: string, idPost: string) {
    const noteToEdit = this.notes.findIndex((nota) => idPost === nota.id);
    this.notes[noteToEdit].content = content;
    this.notes[noteToEdit].time.date = new Date().toLocaleDateString();
    this.notes[noteToEdit].time.hour = new Date().toLocaleTimeString();
    this.notes[noteToEdit].color= this.colors[Math.floor(Math.random() * this.colors.length)]
    let object = { notes: this.notes };

    await this.fs.addNote(this.userUid, object).then(() => {
      console.log('editada');
    });
  }
  async delete(idPost: string) {
    const notesTokeep = this.notes.filter((nota) => idPost !== nota.id);
    console.log(notesTokeep);
    let object = { notes: notesTokeep };

    await this.fs.addNote(this.userUid, object).then(() => {
      console.log('eliminada');
    });
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
  ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
 
}
