import { createAction, props } from '@ngrx/store';
import { IInvoice } from '../../interfaces/IInvoice';


export const getInvoices = createAction('[Invoices] Invoices Loading');

export const getInvoicesSuccess = createAction(
  '[Invoices] Invoices Loaded Success',
  props<{invoices:IInvoice[]}>()
);
export const getInvoicesError = createAction (
  '[Invoices] Invoices Loaded Error',
  props<{payload:any}>()
);