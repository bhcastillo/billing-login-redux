import { Component, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducers';
import { NgxSpinnerService } from 'ngx-spinner';
import { IInvoice } from '../../interfaces/IUser';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})

export class TableComponent implements OnInit{
  invoices:IInvoice[] = [];
  //variables MatTable
  displayedColumns: string[] = ['id','daysBehind','value'];
  displayedColumns1: string[] = ['id','value'];
  constructor(private store:Store<AppState>, private spinner:NgxSpinnerService) { 
  }

  ngOnInit(): void {
    this.store.select('user').subscribe(( { user, loading, error} )=>{
      this.invoices = user.invoices;
    });

  }
  getTotalValues(){
    return this.invoices.map(invoice=> invoice.value).reduce((acc,value)=>acc + value , 0);
  }
}
