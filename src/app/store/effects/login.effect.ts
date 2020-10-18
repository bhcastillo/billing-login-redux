import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import * as userActions from '../actions';

@Injectable()
export class loginEffects {
  constructor (private actions$:Actions, private usersService:UserService){}

  getUser$ = createEffect(()=> this.actions$.pipe(
    ofType(userActions.login),
    mergeMap(
      ({ username, password})=> this.usersService.validateUser(username, password).pipe(
        map(isAuthenticated => userActions.loginSuccess({isAuthenticated})),
        catchError(err => of(userActions.loginError({ payload: err})))
      )
    )
  ));
}