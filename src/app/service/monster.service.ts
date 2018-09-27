import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Monster } from '../models/monster';

@Injectable()
export class MonsterService {
  baseUrl = 'https://api-dice.herokuapp.com/';

  constructor(private http:HttpClient) { }

  createMonster(idGame: String, name: String, health : number, x : number, y: number, pictureLink: String) : Observable<any>{
    return this.http.post(this.baseUrl + 'games/' + idGame + '/monsters', {
      name,
      health,
      x,
      y,
    });
  }

  deleteMonster(idGame:String, idMonster : String) {
    return this.http.delete(this.baseUrl + 'games/' + idGame + '/monsters/' + idMonster);
  }

  updateMonster(monster: Monster) {
    return this.http.put(this.baseUrl + 'monsters/' + monster._id, {
      name : monster.name,
      health: monster.health,
      x : monster.x,
      y : monster.y,
      pictureLink : monster.pictureLink,
    });
  }
}
