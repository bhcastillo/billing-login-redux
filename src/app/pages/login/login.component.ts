import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { AppState } from 'src/app/store/app.reducers';
import * as userActions from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit, DoCheck {
  hideInput: boolean = true;
  isAuthenticated: boolean = false;
  numAttemps: number = 0;
  formLogin:FormGroup;
  constructor(
    private fb: FormBuilder,
    private store:Store<AppState>,
    private spinner:NgxSpinnerService,
    private router:Router,
    private message:AlertMessageService) {
    this.createForm();
   }

  ngDoCheck(): void {
    if (this.isAuthenticated){
      this.router.navigateByUrl('/home')
    }
  }

  ngOnInit(): void {
    this.store.select('isAuthenticated').subscribe(( { isAuthenticated, numAttemps, loading } )=>{
      this.isAuthenticated = isAuthenticated;
      this.numAttemps = numAttemps;
      loading ? this.spinner.show() : this.spinner.hide();
    });
  }
  createForm(){
    this.formLogin = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  onClickLogin(){
    if (this.formLogin.invalid) return;
    if (this.numAttemps >=3){
      this.message.messageAttempsPassed();
    }else{
      this.store.dispatch(userActions.login({username: this.usernameInput.value, password: this.passwordInput.value}))
    }
  }
  resetAttempsPassed(){
    this.store.dispatch(userActions.resetAttempsPassed());
    this.message.messageResetNumAttempsPassed();
  }

  get usernameInput(){ 
    return this.formLogin.get('username');
  }
  get passwordInput(){ return this.formLogin.get('password');}
}
