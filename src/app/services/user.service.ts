import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI = environment.URI;
  constructor(private http:HttpClient) { }

  getBilling(){
    return this.http.get(`${this.URI}/billing`).pipe(delay(2000));
  }
}
