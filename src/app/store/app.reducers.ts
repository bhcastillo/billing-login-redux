import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState{
  invoices: reducers.InvoicesState
}

export const appReducer:ActionReducerMap<AppState> = {
  invoices: reducers.invoicesReducer
} 