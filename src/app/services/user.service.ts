import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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
  // Petition fail validation user
  validateUser(username:string, password:string):Observable<boolean>{
    const usernameFail = 'Brayan';
    const passwordFail = '123';

    if (username.toLowerCase() === usernameFail.toLowerCase() && password === passwordFail) return of(true).pipe(delay(1000)) ;
    return of(false).pipe(delay(1000));
  }
}
