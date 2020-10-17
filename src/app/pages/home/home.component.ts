import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertMessageService } from 'src/app/services/alert-message.service';
import { getInvoices } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(public message:AlertMessageService, private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.dispatch(getInvoices());
  }

}
