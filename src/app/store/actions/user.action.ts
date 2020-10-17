import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export const getUser = createAction(
  '[User] User Loading',
  props<{id:string | number}>()
  );

export const getUserSuccess = createAction(
  '[User] User Loaded Success',
  props<{user:IUser}>()
);
export const getUserError = createAction (
  '[User] User Loaded Error',
  props<{payload:any}>()
);