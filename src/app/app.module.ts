import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './pages/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterFormComponent } from './components/register-form/register-form.component'; 
import {MatIconModule} from '@angular/material/icon';
import {GoogleLoginComponent} from '../app/components/google-login/google-login.component'
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    RegisterFormComponent,
    GoogleLoginComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    MatSidenavModule,
 
  
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
