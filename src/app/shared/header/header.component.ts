import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logOut } from 'src/app/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store, private router: Router) {

   }

  ngOnInit(): void {
  }
  onClickExit(){
    this.store.dispatch(logOut());
    this.router.navigateByUrl('/login');
  }
}
