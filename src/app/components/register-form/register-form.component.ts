import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
hide= true
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
