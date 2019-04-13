import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('https://fiipractic-adina.firebaseio.com/users.json');
  }

  updateUser(updatedUser) {
    return this.http.put('https://fiipractic-adina.firebaseio.com/users/0.json', updatedUser);
  }
}
