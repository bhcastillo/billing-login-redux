import { createAction, props } from '@ngrx/store';
//Login Actions
export const login = createAction(
  '[Login] login loading',
  props<{username: string, password: string}>()
  );
export const loginSuccess = createAction(
  '[Login] Login Loaded Success',
  props<{isAuthenticated:boolean}>()
);
export const loginFail = createAction(
  '[Login] Login Fail Success',
  props<{isAuthenticated:boolean}>()
);
export const loginError = createAction (
  '[Login] User Loaded Error',
  props<{payload:any}>()
);
// LogOut Actions
export const logOut = createAction('[LogOut] LogOut loading');
export const resetAttempsPassed = createAction('[Num Attemps Passed] Num Attemps Passed reset');