import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { InvoicesService } from '../../services/invoices.service';
import * as invoicesActions from '../actions';

@Injectable()
export class InvoicesEffects {
  constructor (private actions$:Actions, private invoicesService:InvoicesService){}

  getInvoices$ = createEffect(()=> this.actions$.pipe(
    ofType(invoicesActions.getInvoices),
    mergeMap(
      ()=> this.invoicesService.getBilling().pipe(
        map(invoices => invoicesActions.getInvoicesSuccess({invoices})),
        catchError(err => of(invoicesActions.getInvoicesError({ payload: err})))
    ))
  ));
}