import { Component, Input, Output , ViewContainerRef, EventEmitter, OnInit } from '@angular/core';

import { Dice } from '../models/dice'
import { DiceService } from '../service/dice.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit{
  @Input('dice') dice : Dice;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  oldDIce : Dice = null;
  editionMode : boolean = false;
  resultMessage = undefined;

  constructor(private diceService : DiceService) {}

  ngOnInit(): void {
    // copy by value
    this.oldDIce = JSON.parse(JSON.stringify(this.dice));
  }

  selfDelete() {
    this.onDelete.emit(this.dice._id);
  }

  rollDices(){
    let tmp ="", count = 0;
    for (let i = 0; i< this.dice.number; i++){
      let valJet = Math.floor(Math.random() * this.dice.type) + 1;
      tmp += valJet.toString() + " + ";
      count += valJet;
    }
    tmp += this.dice.bonus.toString();
    count += this.dice.bonus;

    tmp += " = " + count;

    this.resultMessage = tmp;
    this.updateDice();
  }

  updateDice() {
    if (!this.dice.equals(this.oldDIce)) {
      this.diceService.updateDice(this.dice).subscribe((updatedDice) => {
        this.dice = new Dice(null, null, null, null, null).hydrateFromJSON(updatedDice);
      });
      // copy by value
      this.oldDIce = JSON.parse(JSON.stringify(this.dice));
    }
  }
}
