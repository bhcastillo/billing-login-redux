import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IInvoice } from 'src/app/interfaces/IInvoice';
import { UserService } from 'src/app/services/user.service';
import { getInvoices } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  invoices:IInvoice[] = [];
  constructor(private store:Store<AppState>) { 
  }

  ngOnInit(): void {
    this.store.select('invoices').subscribe(( { invoices, loading, error} )=>{
      this.invoices = invoices;
    });
    this.store.dispatch(getInvoices());
  }

}
