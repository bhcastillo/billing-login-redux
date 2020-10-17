import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  formLogin:FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm(){
    this.formLogin = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  onClickLogin(){
    if (this.formLogin.invalid) return;
    console.log(this.formLogin.controls['password'].value);
  }
  get usernameInput(){ 
    return this.formLogin.get('username');
  }
  get passwordInput(){ return this.formLogin.get('password');}
}
