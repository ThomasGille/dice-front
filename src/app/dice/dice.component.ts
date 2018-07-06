import { Component, Input, Output , ViewContainerRef, EventEmitter } from '@angular/core';
import { Dice } from '../models/dice'

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Input('dice') dice : Dice;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  editionMode : boolean = false;
  resultMessage = undefined;

  selfDelete() {
      this.onDelete.emit(this.dice._id);
  }

  constructor() {}


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
  }
}
