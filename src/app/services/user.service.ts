import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI = environment.URI;
  constructor(private http:HttpClient) { }

  getUserId(id:number | string):Observable<IUser>{
    return this.http.get<IUser>(`${this.URI}/users/${id}`).pipe(delay(1500));
  }
}
