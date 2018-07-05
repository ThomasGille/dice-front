import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MonsterService {
  baseUrl = 'https://api-dice.herokuapp.com/';
  

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + 'users');
  }
}