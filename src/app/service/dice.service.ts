import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Dice } from '../models/dice';

@Injectable()
export class DiceService {
  baseUrl = 'https://api-dice.herokuapp.com/';

  constructor(private http:HttpClient) { }

  createDice(idGame: String, name: String, number : number, type: number, bonus: number) : Observable<any>{
    return this.http.post(this.baseUrl + 'games/' + idGame + '/dices', {
      name,
      number,
      type,
      bonus,
    });
  }

  deleteDice(idGame:String, idDice) {
    return this.http.delete(this.baseUrl + 'games/' + idGame + '/dices/' + idDice);
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