import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
 @Output() userValues = new EventEmitter<object>() 
 @Input() estado: string | undefined
title : string |undefined
button: string | undefined


  constructor() { }

  ngOnInit() {
    switch (this.estado) {
      case "login":
        this.title= 'Inicia sesión'
        this.button= 'Iniciar sesión'
        break;
        case "register":
          this.title= 'Registrarse'
          this.button= 'Crear cuenta'
          break;
      default:
        break;
    }
    
  }
sendEmail(valor: object){
 
  console.log('enviando info')
 

this.userValues.emit(valor)
}
toggleVisibility(){
  if(this.hide){ this.hide= false}else{
    this.hide = true
  }
 
  
}
  
  
}

