import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../service/monsters.service';
import { Dice } from "../models/dice";

@Component({
  selector: 'dice-manager',
  templateUrl: './dice-manager.component.html',
  styleUrls: ['./dice-manager.component.css']
})
export class DiceManagerComponent {
  diceCounter = 0;
  dices: Dice [] = [];
  constructor(private monsterService: MonsterService) {
    monsterService.getUsers().subscribe((data) => {
      console.log(data);
    });
  }

  addDice(){
    this.dices.push( new Dice(
          this.diceCounter.toString(),
          "Potato's dices",
          1,
          6,
          0));
    this.diceCounter++;
  }

  removeDice(id) {
    this.dices = this.dices.filter((el) => {
      return el._id !== id;
    });
  }
}