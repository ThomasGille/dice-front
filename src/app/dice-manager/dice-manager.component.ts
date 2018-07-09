import { Component, OnInit, Input } from '@angular/core';
import { DiceService } from '../service/dice.service';
import { Dice } from "../models/dice";

@Component({
  selector: 'dice-manager',
  templateUrl: './dice-manager.component.html',
  styleUrls: ['./dice-manager.component.css']
})
export class DiceManagerComponent {
  @Input() dices: Dice [] = [];
  @Input() idGame : String;

  constructor(private diceService: DiceService) {
  }

  addDice(){
    this.diceService.createDice(this.idGame, "Dice" + (Math.floor(Math.random() * 1000) + 1), 1, 6, 0).subscribe((dice) => {
      this.dices.push(new Dice(null, null, null, null, null).hydrateFromJSON(dice));
    });
  }

  removeDice(id) {
    this.diceService.deleteDice(this.idGame, id).subscribe(() => {
      this.dices = this.dices.filter((el) => {
        return el._id !== id;
      });
    });
  }
}