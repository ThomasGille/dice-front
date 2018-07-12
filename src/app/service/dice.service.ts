import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Dice } from '../models/dice';

@Injectable()
export class DiceService {
  baseUrl = 'https://api-dice.herokuapp.com/';

  constructor(private http:HttpClient) { }

  createDice(idGame: String, idMonster: String, name: String, number : number, type: number, bonus: number) : Observable<any>{
    const url = idGame ? this.baseUrl + 'games/' + idGame + '/dices' : this.baseUrl + 'monsters/' + idMonster + '/dices';
    return this.http.post(url, {
      name,
      number,
      type,
      bonus,
    });
  }

  deleteDice(idGame:String, idMonster: String, idDice) {
    const url = idGame ? this.baseUrl + 'games/' + idGame + '/dices/' + idDice : this.baseUrl + 'monsters/' + idMonster + '/dices/' + idDice;
    return this.http.delete(url);
  }

  updateDice(dice: Dice) {
    return this.http.put(this.baseUrl + 'dices/' + dice._id, {
      name : dice.name,
      type: dice.type,
      number : dice.number,
      bonus: dice.bonus,
      objective: dice.objective,
    });
  }
}