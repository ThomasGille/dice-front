import { Component, OnInit, Input } from '@angular/core';
import { MonsterService } from '../service/monster.service';
import { Monster } from "../models/monster";

@Component({
  selector: 'monster-manager',
  templateUrl: './monster-manager.component.html',
  styleUrls: ['./monster-manager.component.css']
})
export class MonsterManagerComponent {
  @Input() monsters: Monster [] = [];
  @Input() idGame : String;

  constructor(private monsterService: MonsterService) {
  }

  addMonster(){
    this.monsterService.createMonster(this.idGame, "Monster" + (Math.floor(Math.random() * 1000) + 1),5, 1, 1, null).subscribe((monster) => {
      this.monsters.push(new Monster(null, null).hydrateFromJSON(monster));
    });
  }

  removeMonster(id) {
    this.monsterService.deleteMonster(this.idGame, id).subscribe(() => {
      this.monsters = this.monsters.filter((el) => {
        return el._id !== id;
      });
    });
  }

  selected(monster: Monster) {
    console.log('Je suis une carotte');
  }
}