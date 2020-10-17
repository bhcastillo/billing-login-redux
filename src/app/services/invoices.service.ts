import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IInvoice } from '../interfaces/IInvoice';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private URI = environment.URI;

  constructor(private http:HttpClient) { }
  
  getBilling():Observable<IInvoice[]>{
    return this.http.get<IInvoice[]>(`${this.URI}/billing`).pipe(delay(3000));
  }
}
