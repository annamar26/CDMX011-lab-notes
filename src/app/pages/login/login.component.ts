import { Component, OnInit, Output } from '@angular/core';
import { FormValues } from 'src/app/classes/FormValues';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData: FormValues = {
    email: '',
    password: '',
  };
  userUid: string = ''

  constructor(private authService: AuthService, private fs: FirestoreService) {}

  ngOnInit(): void {}
  login(event: any, type: string) {
    this.userData.email = event.email;
    this.userData.password = event.password;
    const { email, password } = this.userData;
    if (type === 'logIn') {
      this.authService
        .logIn(email, password)
        .then((res) => {
          window.location.href = '/home';
          
        })
        .catch((err) => {
          alert('error, intente nuevamente');
        });
    } else {
      this.authService
        .signUp(email, password)
        .then(() => {
       this.authService.getUserLogged()
       .subscribe((res: any) => {
        this.userUid = res.uid;
        console.log(this.userUid);
        this.fs.addUser({}, this.userUid)
      });
          window.location.href = '/home';
        
        })
        .catch((err) => {
          alert('error, intente nuevamente');
        });
    }
  }
  googleLogin() {
    this.authService
      .logInWithGoogle()
      .then((res) => {
        this.authService.getUserLogged()
        .subscribe((res: any) => {
         this.userUid = res.uid;
         console.log(this.userUid);
         this.fs.addUser({}, this.userUid)
       });
           window.location.href = '/home';
      })
      .catch((err) => {
        alert('error, intente nuevamente');
      });
  }
  changeTab(key: any){
    console.log(key)
  }
}
