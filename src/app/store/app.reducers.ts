import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { LoginState } from './reducers';

export interface AppState{
  user: reducers.UserState,
  isAuthenticated: LoginState
}

export const appReducer:ActionReducerMap<AppState> = {
  user: reducers.userReducer,
  isAuthenticated: reducers.loginReducer
} 