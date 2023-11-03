import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = '';
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]> {
    const userURL = `${this.baseURL}`;
    return this.httpClient.get<User[]>(userURL);
  }
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}`, user);
  }

  getUserById(id:number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id:number,user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/${id}`, user);
  }
  
  deleteUser(id:number): Observable<User> {
    return this.httpClient.delete<User>(`${this.baseURL}/${id}`);
  }

}
