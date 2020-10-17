import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import * as userActions from '../actions';

@Injectable()
export class UserEffects {
  constructor (private actions$:Actions, private usersService:UserService){}

  getUser$ = createEffect(()=> this.actions$.pipe(
    ofType(userActions.getUser),
    mergeMap(
      ()=> {
        
        return this.usersService.getUserId(1).pipe(
        map(user => userActions.getUserSuccess({user})),
        catchError(err => of(userActions.getUserError({ payload: err})))
    )
      })
  ));
}