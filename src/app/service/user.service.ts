import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/"
  getAllUsersByRoleId(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl + `User/GetUsersByRole/${id}`)
  }
  
}
