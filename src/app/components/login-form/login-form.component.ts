import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
 @Output() userValues = new EventEmitter<object>() 



  constructor() { }

  ngOnInit(): void {
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
