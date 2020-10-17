import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState{
  user: reducers.UserState
}

export const appReducer:ActionReducerMap<AppState> = {
  user: reducers.userReducer
} 