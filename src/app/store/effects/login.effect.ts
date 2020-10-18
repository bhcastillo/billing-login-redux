import { ViewFlags } from '@angular/compiler/src/core';
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { UserService } from 'src/app/services/user.service';
import * as userActions from '../actions';

@Injectable()
export class loginEffects {
  constructor (private actions$:Actions, private usersService:UserService, private message:AlertMessageService){}

  getUser$ = createEffect(()=> this.actions$.pipe(
    ofType(userActions.login),
    mergeMap(
      ({ username, password})=> this.usersService.validateUser(username, password).pipe(
        map(isAuthenticated => {
          if (isAuthenticated){
            return userActions.loginSuccess({isAuthenticated});
          }
          console.log('message');
          this.message.messageLoginFail()
          return userActions.loginFail({isAuthenticated});
        }),
        catchError(err => of(userActions.loginError({ payload: err})))
      )
    )
  ));
}