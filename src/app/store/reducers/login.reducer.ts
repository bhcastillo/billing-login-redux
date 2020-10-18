import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface LoginState{
  isAuthenticated:boolean,
  numAttemps: number,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const loginStateInitalState:LoginState = {
  isAuthenticated:false,
  numAttemps: 0,
  loaded:false,
  loading:false,
  error:null
}
const _loginReducer = createReducer(loginStateInitalState,
  on(actions.login, state =>({...state, loading:true, numAttemps: state.numAttemps+ 1 })),
  on(actions.loginSuccess,(state, { isAuthenticated })=> ({
    ...state,
    loading:false,
    loaded:true,
    isAuthenticated:isAuthenticated
    })),
  on(actions.loginError, (state, { payload })=> ({
    ...state,
    loading:false,
    loaded:false,
    error: {
      url:payload.url,
      name:payload.name,
      message:payload.message
    }
  })),
  on(actions.logOut, state =>({
    ...state,
    loading: false,
    loaded: true,
    isAuthenticated:false
  }))
  );
 export function loginReducer(state,action){
   return _loginReducer(state,action);
 }
