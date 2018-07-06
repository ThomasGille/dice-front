import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../service/monsters.service';
import {Dice} from "../dice";

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
    this.dices.push(
        {
          _id: this.diceCounter,
          name: "Potato's dices",
          number: 1,
          type: 6,
          bonus: 0
        }
    );
    this.diceCounter++;
  }

  removeDice(id) {
    this.dices = this.dices.filter((el) => {
      return el._id !== id;
    });
  }
}