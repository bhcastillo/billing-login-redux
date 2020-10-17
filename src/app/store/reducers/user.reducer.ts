import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';
import * as actions from '../actions';

export interface UserState{
  user: IUser,
  loaded: boolean,
  loading: boolean,
  error: any
}

export const userStateInitalState:UserState = {
  user: {
    id:null,
    firstName:undefined,
    lastName:undefined,
    invoices:[]
  },
  loaded:false,
  loading:false,
  error:null
}
const _userReducer = createReducer(userStateInitalState,
  on(actions.getUser, state =>({...state, loading:true})),
  on(actions.getUserSuccess,(state, { user })=> ({
    ...state,
    loading:false,
    loaded:true,
    user: user
    })),
  on(actions.getUserError, (state, { payload })=> ({
    ...state,
    loading:false,
    loaded:false,
    error: {
      url:payload.url,
      name:payload.name,
      message:payload.message
    }
  }))
);
 export function userReducer(state,action){
   return _userReducer(state,action);
 }
