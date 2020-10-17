import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
