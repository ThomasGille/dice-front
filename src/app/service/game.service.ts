import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class GameService {
  baseUrl = 'https://api-dice.herokuapp.com/';

  constructor(private http:HttpClient) { }

  getAllGames() : Observable<any>{
    return this.http.get(this.baseUrl + 'games');
  }

  getGameById(id:String) {
    return this.http.get(this.baseUrl + 'games/' + id);
  }
}