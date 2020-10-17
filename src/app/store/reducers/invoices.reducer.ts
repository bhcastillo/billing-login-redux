import { createReducer, on } from '@ngrx/store';
import { IInvoice } from 'src/app/interfaces/IInvoice';
import * as actions from '../actions';

export interface InvoicesState{
  invoices: IInvoice[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const invoicesInitialState:InvoicesState = {
  invoices:[],
  loaded:false,
  loading:false,
  error:null
}
const _invoicesReducer = createReducer(invoicesInitialState,
  on(actions.getInvoices, state =>({...state, loading:true})),
  on(actions.getInvoicesSuccess,(state, { invoices })=> ({
    ...state,
    loading:false,
    loaded:true,
    invoices:[...invoices]
    })),
  on(actions.getInvoicesError, (state, { payload })=> ({
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
 export function invoicesReducer(state,action){
   return _invoicesReducer(state,action);
 }
