import { Component, OnInit, Output } from '@angular/core';
import { FormValues } from 'src/app/classes/FormValues';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService) {}

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
        .then((res) => {
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
