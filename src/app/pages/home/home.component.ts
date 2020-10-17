import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private p:UserService) { 
    this.p.getBilling().subscribe((e)=>console.log(e))
  }


  ngOnInit(): void {
  }

}
