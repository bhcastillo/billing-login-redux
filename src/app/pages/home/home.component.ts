import { Component, OnInit } from '@angular/core';
//Redux
import { Store } from '@ngrx/store';
import { getInvoices } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
//Services
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { IInvoice } from '../../interfaces/IInvoice';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  invoices:IInvoice[] = [];

  constructor(public message:AlertMessageService, private store:Store<AppState>,private spinner:NgxSpinnerService){}

  ngOnInit(): void {
    this.store.select('invoices').subscribe(( { invoices, loading, error} )=>{
      this.invoices = invoices;
      loading ? this.spinner.show() : this.spinner.hide();
    });
    this.store.dispatch(getInvoices());
    

  }

}
