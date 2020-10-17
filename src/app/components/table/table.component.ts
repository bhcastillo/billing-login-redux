import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getInvoices } from '../../store/actions/invoices.actions';
import { AppState } from '../../store/app.reducers';
import { IInvoice } from '../../interfaces/IInvoice';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})

export class TableComponent implements OnInit {
  invoices:IInvoice[] = [];
  displayedColumns: string[] = ['id','daysBehind','value'];
  displayedColumns1: string[] = ['id','value'];
  constructor(private store:Store<AppState>) { 
  }

  ngOnInit(): void {
    this.store.select('invoices').subscribe(( { invoices, loading, error} )=>{
      this.invoices = invoices;
    });
  }
  getTotalValues(){
    return this.invoices.map(invoice=> invoice.value).reduce((acc,value)=>acc + value , 0);
  }
}
