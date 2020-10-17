import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports:[
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
