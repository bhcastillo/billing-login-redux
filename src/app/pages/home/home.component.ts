import { Component, OnInit } from '@angular/core';
//Redux
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
//Services
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { NgxSpinnerService } from 'ngx-spinner';
//Interfaces
import { IInvoice, IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  invoices:IInvoice[] = [];
  user:IUser = {
    id:null,
    firstName:undefined,
    lastName:undefined,
    invoices:[]
  };
  constructor(public message:AlertMessageService, private store:Store<AppState>,private spinner:NgxSpinnerService){}

  ngOnInit(): void {
    
    this.store.select('user').subscribe(({ user, loading, error })=>{
      this.user = user;
      this.invoices = user.invoices;
      loading ? this.spinner.show() : this.spinner.hide();

    })
    this.store.dispatch(getUser({id:1}));

  }

}
